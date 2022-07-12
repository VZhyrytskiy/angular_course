import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  products!: Product[];
  
  constructor(private readonly cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getProducts()
  }

  getProductId(index: number, item: Product): string {
    return item.id;
  }

  getSum() {
    return this.products?.reduce((acc: number, product: Product) => acc + product.price, 0);
  }
}
