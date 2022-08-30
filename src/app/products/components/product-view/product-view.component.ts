import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, first } from 'rxjs';
import { CartObservableService } from 'src/app/cart/services/cart-observable.service';
import { AutoUnsubscribe } from 'src/app/core/decorators/auto-unsubscribe.decorator';
import { Product } from '../../models/product';
import { ProductsPromiseService } from '../../services/products-promise.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
@AutoUnsubscribe()
export class ProductViewComponent implements OnInit {
  private sub!: Subscription;
  public product!: Promise<Product>;
  public originalProduct!: Product;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly productsPromiseService: ProductsPromiseService,
    private readonly cartObservableService: CartObservableService
  ) { }

  ngOnInit(): void {
    this.product = this.productsPromiseService.getProductById(this.activatedRoute.snapshot.params['productID']);
  }

  public onAddToCart(product: Product) {
    this.sub = this.cartObservableService.addProduct(product)
      .pipe(
        first()
      ).subscribe();
  }

}
