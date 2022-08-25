import { Component } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { CartService } from '../../services/cart.service';
import { sortSelectOptions } from '../../models/sort.model'

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {

  products!: Product[];
  sortSelectOptions = sortSelectOptions();
  sortOptions = {
    field: '' as keyof Product,
    direction: '' as keyof Product,
  };

  constructor(public readonly cartService: CartService) { }

  public get allProducts() {
    return this.cartService.getProducts();
  }

  public getProductId(index: number, item: Product): string {
    return item.id;
  }

  public getSum() {
    return this.cartService.totalCost;
  }

  public getQuantity() {
    return this.cartService.totalQuantity;
  }

  public onIncrease(product: Product): void {
    this.cartService.addProduct(product);
  }

  public onDecrease(productId: string): void {
    this.cartService.decreaseQuantity(productId);
  }

  public onDelete(productId: string): void {
    this.cartService.removeProduct(productId);
  }

  public onSortFieldChange(event: Event): void {
    this.sortOptions.field = (event.target as HTMLInputElement).value as keyof Product;
  }

  onSortDirectionChange(event: Event) {
    this.sortOptions.direction = (event.target as HTMLInputElement).value as keyof Product;
  }

  public onCheckout() { }
}
