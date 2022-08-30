import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { Category, Product } from '../models/product';
import { ProductsPromiseService } from '../services/products-promise.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {
  constructor(
    private productsPromiseService: ProductsPromiseService,
    private router: Router,
    private spinnerService: SpinnerService
  ) { }


  resolve(route: ActivatedRouteSnapshot): Product | Promise<Product> | Observable<Product> {

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

    return this.productsPromiseService.getProductById(id)
      .then((product: Product) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.spinnerService.hide();
            if (product) {
              resolve(product);
            } else {
              this.router.navigate(['/products']);
              reject();
            }
          }, 2000);
        });
      });
  }
}
