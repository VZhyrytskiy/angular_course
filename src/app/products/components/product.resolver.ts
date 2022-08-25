import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, delay, EMPTY, finalize, Observable, of, switchMap, take } from 'rxjs';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { Category, Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {
  constructor(
    private productService: ProductsService,
    private router: Router,
    private spinnerService: SpinnerService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Product> {
    console.log('ProductResolver Guard is called');

    if (!route.paramMap.has('productID')) {
      return of({
        name: '',
        description: '',
        price: 0,
        category: Category.Beginner,
        image: '',
        imageTmb: '',
        isAvailable: false
      } as Product);
    }

    this.spinnerService.show();
    const id = route.paramMap.get('productID')!;

    return this.productService.getProductById(id)
      .pipe(
        delay(2000),
        switchMap((product: Product) => {
          if (product) {
            return of(product);
          } else {
            this.router.navigate(['/products']);
            return EMPTY;
          }
        }),
        take(1),
        catchError(() => {
          this.router.navigate(['/products']);
          return EMPTY;
        }),
        finalize(() => this.spinnerService.hide())
      );
  }
}




