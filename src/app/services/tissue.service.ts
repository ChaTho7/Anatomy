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
    return this.httpClient.get<ListResponseModel<TissueDetail>>(
      tissueDetailApiURL
    );
  }

  getTissuesBySort(
    sortId: number
  ): Observable<ListResponseModel<TissueDetail>> {
    let tissueBySortApiUrl = this.apiURL + 'tissues/getbysort?sortId=' + sortId;
    return this.httpClient.get<ListResponseModel<TissueDetail>>(
      tissueBySortApiUrl
    );
  }

  getTissuesByRegion(
    regionId: number
  ): Observable<ListResponseModel<TissueDetail>> {
    let tissueByRegionApiUrl =
      this.apiURL + 'tissues/getbyregion?regionId=' + regionId;
    return this.httpClient.get<ListResponseModel<TissueDetail>>(
      tissueByRegionApiUrl
    );
  }

  getTissuesBySort_Region(
    sortId: number,
    regionId: number
  ): Observable<ListResponseModel<TissueDetail>> {
    let tissueBySort_RegionApiUrl1 =
      this.apiURL + 'tissues/getbysort_region?sortId=' + sortId;
    let tissueBySort_RegionApiUrl =
      tissueBySort_RegionApiUrl1 + '&regionId=' + regionId;
    return this.httpClient.get<ListResponseModel<TissueDetail>>(
      tissueBySort_RegionApiUrl
    );
  }
}
