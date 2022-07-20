import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() products: Product[] = [];
  @Input() total!: number;
  @Input() haveAction = false;
  @Input() qty = 0;
  @Output() productClick = new EventEmitter<Product>();

  onAddToCart(product: Product) {
    this.productClick.emit(product);
  }

  getProductId(index: number, item: Product): string {
    return item.id;
  }
}
