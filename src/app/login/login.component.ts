import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole, userRadioButtonsOptions } from '../core/models/roles';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isAuthorize = false;
  public userRole!: UserRole;
  public roles = userRadioButtonsOptions();
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.userRole = this.authService.userRole;
  }

  public onLogin() {
    this.authService.login(this.userRole)
      .subscribe((result) => {
        if (result) {
          this.isAuthorize = true;
          this.router.navigate([this.roles.find(r => r.type === this.authService.userRole)?.url || '403']);
        }
      })
  }

}
