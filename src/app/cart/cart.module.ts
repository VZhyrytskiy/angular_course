import { NgModule } from '@angular/core';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { ProductsModule } from '../products/products.module';
import { SharedModule } from '../shared/shared.module';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [
    ProductsModule,
    SharedModule
  ],
  exports: [CartListComponent]
})
export class CartModule { }
