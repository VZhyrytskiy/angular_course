import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import {
  catchError,
  Observable,
  retry,
  share,
  first,
  throwError,
  switchMap,
  EMPTY,
  BehaviorSubject,
  finalize,
  map,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartObservableService {
  private readonly baseUrl = 'http://localhost:3000/cart';

  private quantity$ = new BehaviorSubject(0);
  public readonly productQuantity$ = this.quantity$.asObservable();

  private cart$ = new BehaviorSubject(false);
  public readonly isCartEmpty$ = this.cart$.asObservable();

  constructor(private readonly http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
      .pipe(
        retry(3),
        share(),
        tap((products: Product[]) => {
          let qty = products.reduce((acc: number, product: Product) => acc + (product.qty || 1), 0);
          this.quantity$.next(qty);
          this.cart$.next(!!qty);
        }),
        catchError(this.handleError),
      );
  }



  public addProduct(product: Product): Observable<Product> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.get<Product>(`${this.baseUrl}/${product.id}`)
      .pipe(
        catchError((error) => {
          if (error.status === 404) {
            return this.http.post<Product>(`${this.baseUrl}`, product, options)
          } else {
            console.error('An error occurred:', error.error);
            return throwError(() => new Error('Something bad happened; please try again later.'));
          }
        }),
        switchMap((p: Product) => {
          p.qty = p.qty ? p.qty + 1 : 1;
          return this.updateProduct(p);
        }),
        finalize(() => {
          this.getProducts()
            .pipe(
              first(),
              map((products: Product[]) => products.reduce((acc: number, product: Product) => acc + (product.qty || 1), 0))
            )
            .subscribe(qty => {
              this.quantity$.next(qty);
              this.cart$.next(true);
            })
        })
      );
  }

  public decreaseProduct(product: Product): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${product.id}`)
      .pipe(
        switchMap((p: Product) => {
          p.qty = p.qty == 1 ? p.qty : p.qty! - 1;
          return this.updateProduct(p);
        }),
        catchError(this.handleError),
        finalize(() => {
          this.getProducts()
            .pipe(
              first(),
              map((products: Product[]) => products.reduce((acc: number, product: Product) => acc + (product.qty || 1), 0))
            )
            .subscribe(qty => {
              this.quantity$.next(qty);
              this.cart$.next(true);
            })
        })
      );
  }

  public updateProduct(product: Product): Observable<Product> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product, options)
      .pipe(
        retry(3),
        share(),
        catchError(this.handleError)
      );
  }

  public clearCart(): Observable<any> {
    return this.http.get<Product[]>(this.baseUrl)
      .pipe(
        tap(() => {
          this.cart$.next(false);
          this.quantity$.next(0);
        }),
        switchMap((products: Product[]) => { // how i can optimize it
          return products.map((product) => {
            this.http.delete(`${this.baseUrl}/${product.id}`).pipe(first()).subscribe();
          })
        })
      );
  }

  public removeProduct(productId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${productId}`)
      .pipe(
        finalize(() => {
          this.getProducts()
            .pipe(
              first(),
              map((products: Product[]) => products.reduce((acc: number, product: Product) => acc + (product.qty || 1), 0))
            )
            .subscribe(qty => {
              this.quantity$.next(qty);
              this.cart$.next(!!qty);
            })
        })
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      console.log('Nothing special happened. Just ad item to cart');
      return throwError(() => EMPTY);
    }
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
