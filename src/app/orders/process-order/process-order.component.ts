import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartObservableService } from 'src/app/cart/services/cart-observable.service';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.scss']
})
export class ProcessOrderComponent {

  constructor(
    private readonly cartObservableService: CartObservableService, 
    private readonly router: Router) { }

  public onSubmit() {
    this.cartObservableService.clearCart().subscribe();
    this.router.navigate(['/']);
  }
}
