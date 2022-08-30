import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription, first } from 'rxjs';
import { CartObservableService } from 'src/app/cart/services/cart-observable.service';
import { AutoUnsubscribe } from 'src/app/core/decorators/auto-unsubscribe.decorator';
import { Product } from '../../models/product';
import { ProductsPromiseService } from '../../services/products-promise.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
@AutoUnsubscribe()
export class ProductListComponent implements OnInit {
  private sub!: Subscription;
  products!: Promise<Product[]>;

  constructor(
    private readonly productsPromiseService: ProductsPromiseService,
    private readonly cartObservableService: CartObservableService,
    private readonly cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.products = this.productsPromiseService.getProducts();
    this.sub = this.cartObservableService.getProducts().subscribe();
  }

  onAddToCart(product: Product) {
    this.sub = this.cartObservableService.addProduct(product)
      .pipe(
        first()
      ).subscribe();
  }

  getProductId(index: number, item: Product): string {
    return item.id;
  }

}
