import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { ProductsPromiseService } from 'src/app/products/services/products-promise.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  public productList!: Promise<Product[]>;

  constructor(
    private readonly productsPromiseService: ProductsPromiseService
  ) { }

  ngOnInit(): void {
    this.productList = this.productsPromiseService.getProducts();
  }

  public getProductId(index: number, item: Product): string {
    return item.id;
  }

  public onDeleteTask(id: string) {
    this.productsPromiseService.deleteProductById(id)
    .then(()=>this.productList = this.productsPromiseService.getProducts());
  }

}
