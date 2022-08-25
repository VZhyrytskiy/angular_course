import { Injectable } from '@angular/core';
import { Observable, of, delay, tap } from 'rxjs';
import { UserRole } from '../models/roles';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userRole = UserRole.User;
  public isLoggedIn = false;

  constructor(private readonly spinnerService: SpinnerService) { }

  public login(role: UserRole = UserRole.User): Observable<boolean> {
    this.spinnerService.show();
    return of(true).pipe(
      delay(1500),
      tap(() => {
        this.userRole = role;
        this.isLoggedIn = true;
        this.spinnerService.hide();
      })
    );
  }

  public isAdmin(): boolean {
    return this.userRole === UserRole.Admin
  }

}
