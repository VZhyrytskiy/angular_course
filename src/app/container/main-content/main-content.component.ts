import { Component } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { UserRole } from 'src/app/core/models/roles';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

  constructor(
    private cartService: CartService,
    private readonly authService: AuthService
  ) { }

  getQuantity() {
    return this.cartService.totalQuantity;
  }

  get isAdmin(): boolean {
    return this.authService.isAdmin();
  }

}
