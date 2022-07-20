import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];

  addProduct(product: Product) {
    const productPosition = this.products.findIndex((element) => element.id === product.id);
    if (~productPosition) {
      this.products[productPosition].qty!++;
      this.products = Array.from([...this.products]);
    } else {
      product.qty = 1;
      this.products = [...this.products, product];
    }
  }

  removeProduct(productId: string) {
    this.products = this.products.filter((product) => product.id !== productId);
  }

  reduceProduct(productId: string) {
    const productPosition = this.products.findIndex((element) => element.id === productId);
    if (~productPosition) {
      this.products[productPosition].qty = this.products[productPosition].qty! > 1 ? --this.products[productPosition].qty! : 1;
    }
  }

  getProducts(): Product[] {
    return this.products;
  }

  totalCost(): number {
    return this.products.reduce((acc: number, product: Product) => acc + product.price * product.qty!, 0);
  }

  totalQuantity(): number {
    return this.products.reduce((acc: number, product: Product) => acc + (product.qty || 1), 0);
  }
}
