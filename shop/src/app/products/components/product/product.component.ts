import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() id!: string;
  @Input() number!: number;
  @Input() name!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() action = false;

  constructor() { }

  onAddToCart(id: string) {
    console.log(`${id} Add to cart`);
  }
}
