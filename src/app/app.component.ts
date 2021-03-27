import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Anatomy';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('token_expiration');
    this.toastrService.info('Logged out Successfully');
    this.router.navigate(['']);
  }

  isSessionActive() {
    if (
      this.authService.isAuthenticated() &&
      !this.authService.isTokenExpired()
    ) {
      return true;
    } else {
      return false;
    }
  }
}
