import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { ContainerComponent } from './container/container.component';
import { AuthGuard } from './core/guards/auth.guard';
import { IsCartEmptyGuard } from './core/guards/is-cart-empty.guard';
import { LoginComponent } from './login/login.component';
import { ProcessOrderComponent } from './orders/process-order/process-order.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductViewComponent } from './products/components/product-view/product-view.component';
import { AccessDeniedComponent } from './shared/access-denied/access-denied.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    title: 'Home Page',
    children: [
      {
        path: '',
        redirectTo: 'products-list',
        pathMatch: 'full'
      },
      {
        path: 'products-list',
        component: ProductListComponent,
        title: 'Product list'
      },
      {
        path: 'product/:productID',
        component: ProductViewComponent
      },
      {
        path: 'cart',
        component: CartListComponent,
        title: 'Cart list'
      },
      {
        path: 'order',
        component: ProcessOrderComponent,
        canActivate: [IsCartEmptyGuard],
        title: 'Process Order'
      },
      {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        title: 'Administrator'
      },
    ]
  },
  { path: '403', component: AccessDeniedComponent, title: 'Access Denied' },
  { path: '404', component: NotFoundComponent, title: 'Page Not Found' },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
