import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  static currentUser: UserModel = { email: '', name: '', surname: '' };
  constructor(private httpClient: HttpClient) {
    this.getUser(UserService.currentUser.email).subscribe((response) => {
      UserService.currentUser = response.data;
    });
  }

  apiURL = 'https://localhost:44344/api/users/';

  getUser(email: string): Observable<SingleResponseModel<UserModel>> {
    return this.httpClient.get<SingleResponseModel<UserModel>>(
      this.apiURL + 'getuser?email=' + email
    );
  }
}
