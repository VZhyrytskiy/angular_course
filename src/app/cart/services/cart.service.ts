import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts: Product[] = [];

  // get totalCost(): number {
  //   return this.cartProducts.reduce((acc: number, product: Product) => acc + product.price * product.qty!, 0);
  // }

  // get totalQuantity(): number {
  //   return this.cartProducts.reduce((acc: number, product: Product) => acc + (product.qty || 1), 0);
  // }

  // get isEmptyCart(): boolean {
  //   return !!this.cartProducts.length;
  // }

  // addProduct(product: Product) {
  //   const productPosition = this.cartProducts.findIndex((element) => element.id === product.id);
  //   if (~productPosition) {
  //     this.cartProducts[productPosition].qty!++;
  //     this.cartProducts = Array.from([...this.cartProducts]);
  //   } else {
  //     product.qty = 1;
  //     this.cartProducts = [...this.cartProducts, product];
  //   }
  // }

  // removeProduct(productId: string) {
  //   this.cartProducts = this.cartProducts.filter((product) => product.id !== productId);
  // }

  // decreaseQuantity(productId: string) {
  //   this.changeQuantity(productId, -1);
  // }

  // increaseQuantity(productId: string) {
  //   this.changeQuantity(productId, 1);
  // }

  // getProducts(): Product[] {
  //   return this.cartProducts;
  // }

  // removeAllProducts() {
  //   this.cartProducts = [];
  // }

  // private changeQuantity(productId: string, quantity: number = 0) {
  //   const productPosition = this.cartProducts.findIndex((element) => element.id === productId);
  //   if (~productPosition) {
  //     this.cartProducts[productPosition].qty = this.cartProducts[productPosition].qty! + quantity;
  //     this.cartProducts[productPosition].qty = this.cartProducts[productPosition].qty! < 1 ? 1: this.cartProducts[productPosition].qty!;
  //   }
  // }
}
