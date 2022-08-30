import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { sortSelectOptions } from '../../models/sort.model'
import { CartObservableService } from '../../services/cart-observable.service';
import { Subscription, first } from 'rxjs';
import { AutoUnsubscribe } from 'src/app/core/decorators/auto-unsubscribe.decorator';
import { AppSettingsService } from 'src/app/core/services/app-settings.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
@AutoUnsubscribe()
export class CartListComponent implements OnInit {
  private sub!: Subscription;
  products = this.cartObservableService.getProducts();


  sortSelectOptions = sortSelectOptions();
  sortOptions = {
    field: '' as keyof Product,
    direction: '' as keyof Product,
  };

  constructor(
    private readonly cartObservableService: CartObservableService,
    private readonly appSettingsService: AppSettingsService
  ) { }

  ngOnInit(): void {
    this.sub = this.appSettingsService.sortOptions$
      .subscribe(settings => {
        this.sortOptions.field = settings.sortOptions.field as keyof Product;
        this.sortOptions.direction = settings.sortOptions.direction as keyof Product;
      });
  }

  public getProductId(index: number, item: Product): string {
    return item.id;
  }

  public getSum(products: Product[]) {
    return products.reduce((acc: number, product: Product) => acc + product.price * product.qty!, 0);
  }

  public getQuantity(products: Product[]) {
    return products.reduce((acc: number, product: Product) => acc + (product.qty || 1), 0);
  }

  public onIncrease(product: Product): void {
    this.sub = this.cartObservableService.addProduct(product)
      .pipe(
        first()
      ).subscribe(
        () => this.products = this.cartObservableService.getProducts()
      );
  }

  public onDecrease(product: Product): void {
    this.sub = this.cartObservableService.decreaseProduct(product)
      .pipe(
        first()
      ).subscribe(
        () => this.products = this.cartObservableService.getProducts()
      );
  }

  public onDelete(productId: string): void {
    this.cartObservableService.removeProduct(productId)
      .pipe(
        first()
      ).subscribe(
        () => this.products = this.cartObservableService.getProducts()
      );
  }

  public onSortFieldChange(event: Event): void {
    this.sortOptions.field = (event.target as HTMLInputElement).value as keyof Product;
  }

  public onSortDirectionChange(event: Event) {
    this.sortOptions.direction = (event.target as HTMLInputElement).value as keyof Product;
  }

  public onCheckout() { }
}
