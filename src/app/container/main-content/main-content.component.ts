import { Component, OnInit } from '@angular/core';
import { CartObservableService } from 'src/app/cart/services/cart-observable.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  public quantity!: Observable<number>;

  constructor(
    private cartObservableService: CartObservableService,
    private readonly authService: AuthService
  ) { }

  ngOnInit(): void {
    this.quantity = this.cartObservableService.productQuantity$;
  }

  get isAdmin(): boolean {
    return this.authService.isAdmin();
  }

}
