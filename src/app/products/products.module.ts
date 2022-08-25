import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductViewComponent, ProductFormComponent],
  imports: [
    SharedModule
  ],
  exports: [ProductListComponent],
})
export class ProductsModule { }
