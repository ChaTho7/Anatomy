import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { TissueImage } from '../models/tissueImage';

@Injectable({
  providedIn: 'root',
})
export class TissueImageService {
  apiURL = 'https://localhost:44344/api/TissueImages/getimage?tissueId=';

  constructor(private httpClient: HttpClient) {}

  getTissueImages(
    tissueId: number
  ): Observable<ListResponseModel<TissueImage>> {
    let tissueImageApiURL = this.apiURL + tissueId;
    return this.httpClient.get<ListResponseModel<TissueImage>>(
      tissueImageApiURL
    );
  }
}
