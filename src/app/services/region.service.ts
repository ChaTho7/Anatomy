import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Region } from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private httpClient: HttpClient) {}

  tissueApiURL = 'https://localhost:44344/api/regions/getall';

  getRegions(): Observable<ListResponseModel<Region>> {
    return this.httpClient.get<ListResponseModel<Region>>(this.tissueApiURL);
  }
}
