import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from './models/userModel';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Anatomy';
  user: UserModel = { id: 0, email: '', name: '', surname: '' };

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService,
    private userService: UserService
  ) {
    if (this.isSessionActive()) {
      this.getUser(localStorage.getItem('userEmail'));
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('token_expiration');
    localStorage.removeItem('userEmail');
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

  getUser(email: string | null) {
    this.userService.getUser(email).subscribe((response) => {
      this.user = response.data;
    });
  }
}
