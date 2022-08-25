import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  products!: Product[];
  constructor(private readonly productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  public getProductId(index: number, item: Product): string {
    return item.id;
  }

}
