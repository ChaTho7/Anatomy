import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
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
    let tissueDetailApiURL = this.apiURL + 'tissues/getbyfilter';
    return this.httpClient.get<ListResponseModel<TissueDetail>>(
      tissueDetailApiURL
    );
  }

  getTissuesById(id: number): Observable<ListResponseModel<TissueDetail>> {
    let tissueBySortApiUrl = this.apiURL + 'tissues/getbyfilter?id=' + id;
    return this.httpClient.get<ListResponseModel<TissueDetail>>(
      tissueBySortApiUrl
    );
  }

  getTissuesBySort(
    sortId: number
  ): Observable<ListResponseModel<TissueDetail>> {
    let tissueBySortApiUrl =
      this.apiURL + 'tissues/getbyfilter?sortId=' + sortId;
    return this.httpClient.get<ListResponseModel<TissueDetail>>(
      tissueBySortApiUrl
    );
  }

  getTissuesByRegion(
    regionId: number
  ): Observable<ListResponseModel<TissueDetail>> {
    let tissueByRegionApiUrl =
      this.apiURL + 'tissues/getbyfilter?regionId=' + regionId;
    return this.httpClient.get<ListResponseModel<TissueDetail>>(
      tissueByRegionApiUrl
    );
  }

  getTissuesBySort_Region(
    sortId: number,
    regionId: number
  ): Observable<ListResponseModel<TissueDetail>> {
    let tissueBySort_RegionApiUrl1 =
      this.apiURL + 'tissues/getbyfilter?sortId=' + sortId;
    let tissueBySort_RegionApiUrl =
      tissueBySort_RegionApiUrl1 + '&regionId=' + regionId;
    return this.httpClient.get<ListResponseModel<TissueDetail>>(
      tissueBySort_RegionApiUrl
    );
  }

  postTissue(tissue: Tissue): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiURL + 'tissues/add',
      tissue
    );
  }
}
