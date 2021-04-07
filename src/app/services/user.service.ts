import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserModel } from '../models/userModel';
import { UserUpdateModel } from '../models/userUpdateModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  apiURL = 'https://localhost:44344/api/users/';

  getUser(email: string | null): Observable<SingleResponseModel<UserModel>> {
    return this.httpClient.get<SingleResponseModel<UserModel>>(
      this.apiURL + 'getuser?email=' + email
    );
  }

  updateUser(
    user: UserUpdateModel
  ): Observable<SingleResponseModel<UserUpdateModel>> {
    return this.httpClient.put<SingleResponseModel<UserUpdateModel>>(
      this.apiURL + 'updateUser',
      user
    );
  }
}
