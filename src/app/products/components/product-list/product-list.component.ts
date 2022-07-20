import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: Product[];

  constructor(
    private readonly productsService: ProductsService,
    private readonly cartService: CartService
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onProductClick(product: Product): void {
    this.cartService.addProduct(product);
  }

}
