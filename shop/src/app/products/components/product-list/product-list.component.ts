import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products!: Product[];

  constructor(private readonly productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  getProductId(index: number, item: Product): string {
    return item.id;
  }

}
