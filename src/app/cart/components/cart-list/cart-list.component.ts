import { Component } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {

  products!: Product[];

  constructor(public readonly cartService: CartService) { }

  getProductId(index: number, item: Product): string {
    return item.id;
  }

  getSum() {
    return this.cartService.totalCost;
  }

  getQuantity() {
    return this.cartService.totalQuantity;
  }

  onIncrease(product: Product): void {
    this.cartService.addProduct(product);
  }

  onDecrease(productId: string): void {
    this.cartService.decreaseQuantity(productId);
  }

  onDelete(productId: string): void {
    this.cartService.removeProduct(productId);
  }

}
