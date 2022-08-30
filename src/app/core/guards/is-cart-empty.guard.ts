import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, first } from 'rxjs';
import { CartObservableService } from 'src/app/cart/services/cart-observable.service';

@Injectable({
  providedIn: 'root'
})
export class IsCartEmptyGuard implements CanActivate {
  constructor(
    private readonly cartObservableService: CartObservableService,
    private readonly router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    return this.cartObservableService.isCartEmpty$ || this.router.navigate(['403']);
  }

}
