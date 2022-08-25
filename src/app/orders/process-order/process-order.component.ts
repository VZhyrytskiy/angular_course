import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.scss']
})
export class ProcessOrderComponent implements OnInit {

  constructor(private readonly cartService: CartService, private readonly router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    this.cartService.removeAllProducts();
    this.router.navigate(['/']);
  }
}
