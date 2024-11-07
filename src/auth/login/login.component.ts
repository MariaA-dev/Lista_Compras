// auth/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  onLogin() {
    const mockToken = 'sample-oauth-token';
    this.authService.login(mockToken);
  }
}
