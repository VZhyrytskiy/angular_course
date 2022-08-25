import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  public product!: Product;
  public originalProduct!: Product;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly ps: ProductsService,
    private readonly cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((data: Data) => this.ps.getProductById(data['productID'])),
        map(product => product ? product : {} as Product)
      )
      .subscribe((product: Product) => (this.product = { ...product }));
  }

  public onAddToCart(product: Product) {
    this.cartService.addProduct(product);
  }

}
