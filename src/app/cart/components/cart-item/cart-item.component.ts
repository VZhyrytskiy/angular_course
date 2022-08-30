import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/products/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() product!: Product;
  @Input() number!: number;
  @Output() increase = new EventEmitter<Product>();
  @Output() decrease = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<string>();

  onQuantityIncrease() {
    this.increase.emit(this.product);
  }

  onQuantityDecrease() {
    this.decrease.emit(this.product);
  }

  onDeleteItem() {
    this.delete.emit(this.product.id);
  }
}
