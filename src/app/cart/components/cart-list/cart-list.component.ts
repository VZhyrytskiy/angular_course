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

  // немного не понятно:
  // для разных методов сервиса, созданы методы обертки, но для метода
  // getProducts() обертки нет и для этого надо сервис внедрять как публичный и использовать в темплейте
  // - Сделал. Не знаю почему сначала не сделал так ).
  constructor(public readonly cartService: CartService) { }

  get allProducts() {
    return this.cartService.getProducts();
  }

  getProductId(index: number, item: Product): string {
    return item.id;
  }

  getSum() {
    return this.cartService.totalCost;
  }

  getQuantity() {
    return this.cartService.totalQuantity;
  }

  onIncrease(product: Product): void {
    this.cartService.addProduct(product);
  }

  onDecrease(productId: string): void {
    this.cartService.decreaseQuantity(productId);
  }

  onDelete(productId: string): void {
    this.cartService.removeProduct(productId);
  }

  onSortFieldChange(event: Event): void {
    this.sortOptions.field = (event.target as HTMLInputElement).value as keyof Product;
  }

  onSortDirectionChange(event: Event) {
    this.sortOptions.direction = (event.target as HTMLInputElement).value as keyof Product;
  }
}
