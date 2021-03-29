import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserModel } from '../models/userModel';

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
}
