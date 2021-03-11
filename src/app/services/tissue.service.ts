import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TissueImageResponseModel } from '../models/tissueImageResponseModel';
import { TissueResponseModel } from '../models/tissueResponseModel';

@Injectable({
  providedIn: 'root',
})
export class TissueService {
  constructor(private httpClient: HttpClient) {}

  tissueApiURL = 'https://localhost:44344/api/tissues/getall';
  tissueImageApiURL =
    'https://localhost:44344/api/TissueImages/getimage?tissueId=3';

  getTissues(): Observable<TissueResponseModel> {
    return this.httpClient.get<TissueResponseModel>(this.tissueApiURL);
  }

  getTissueImages(): Observable<TissueImageResponseModel> {
    return this.httpClient.get<TissueImageResponseModel>(this.tissueImageApiURL);
  }
}
