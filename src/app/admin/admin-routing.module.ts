import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { CanDeactivateGuard } from '../core/guards/can-deactivate.guard';
import { ProductFormComponent } from '../products/components/product-form/product-form.component';
import { ProductResolver } from '../products/components/product.resolver';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AdminComponent,
    data: { title: 'Administrator' },
    children: [
      {
        path: 'products',
        component: AdminProductsComponent,
        title: 'Administrator / Products'
      },
      {
        path: 'product/add',
        component: ProductFormComponent,
        title: 'Administrator / Add Product'
      },
      {
        path: 'product/edit/:productID',
        component: ProductFormComponent,
        canDeactivate: [CanDeactivateGuard],
        resolve: {
          product: ProductResolver
        },
        title: 'Administrator / Edit Product'
      },
      {
        path: 'orders',
        component: AdminOrdersComponent,
        title: 'Administrator / Orders'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
