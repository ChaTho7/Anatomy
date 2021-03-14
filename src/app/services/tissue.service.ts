import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Tissue } from '../models/tissue';
import { TissueDetail } from '../models/tissueDetail';

@Injectable({
  providedIn: 'root',
})
export class TissueService {
  constructor(private httpClient: HttpClient) {}

  apiURL = 'https://localhost:44344/api/';

  getTissues(): Observable<ListResponseModel<Tissue>> {
    let tissueApiURL = this.apiURL + 'tissues/getall';
    return this.httpClient.get<ListResponseModel<Tissue>>(tissueApiURL);
  }

  getTissuesDetail(): Observable<ListResponseModel<TissueDetail>> {
    let tissueDetailApiURL = this.apiURL + 'tissues/getdetail';
    return this.httpClient.get<ListResponseModel<TissueDetail>>(tissueDetailApiURL);
  }

  getTissuesBySort(sortId: number): Observable<ListResponseModel<TissueDetail>> {
    let tissueBySortApiUrl = this.apiURL + 'tissues/getbysort?sortId=' + sortId;
    return this.httpClient.get<ListResponseModel<TissueDetail>>(tissueBySortApiUrl);
  }
}
