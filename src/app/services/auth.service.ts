import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL = 'https://localhost:44344/api/auth/';
  constructor(private httpClient: HttpClient) {}

  login(user: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiURL + 'login',
      user
    );
  }

  register(user: RegisterModel): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiURL + 'register',
      user
    );
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  isTokenExpired(): boolean {
    let expirationDateString = localStorage.getItem('token_expiration');
    if (expirationDateString) {
      if (expirationDateString > new Date().toDateString()) {
        return false;
      } else {
        localStorage.removeItem('token_expiration');
        return true;
      }
    } else {
      return true;
    }
  }
}
