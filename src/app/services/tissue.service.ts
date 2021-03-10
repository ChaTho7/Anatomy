import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TissueResponseModel } from '../models/tissueResponseModel';

@Injectable({
  providedIn: 'root',
})
export class TissueService {
  constructor(private httpClient: HttpClient) {}

  apiURL = 'https://localhost:44344/api/tissues/getall';

  getTissues(): Observable<TissueResponseModel> {
    return this.httpClient.get<TissueResponseModel>(this.apiURL);
  }
}
