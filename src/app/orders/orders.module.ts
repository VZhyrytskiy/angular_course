import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProcessOrderComponent } from './process-order/process-order.component';

@NgModule({
  declarations: [
    ProcessOrderComponent
  ],
  imports: [
    SharedModule
  ]
})
export class OrdersModule { }
