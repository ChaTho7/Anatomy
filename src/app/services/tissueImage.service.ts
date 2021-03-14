import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { TissueImage } from '../models/tissueImage';

@Injectable({
  providedIn: 'root',
})
export class TissueImageService {
  tissueImageApiURL =
    'https://localhost:44344/api/TissueImages/getimage?tissueId=3';

  constructor(private httpClient: HttpClient) {}

  getTissueImages(): Observable<ListResponseModel<TissueImage>> {
    return this.httpClient.get<ListResponseModel<TissueImage>>(
      this.tissueImageApiURL
    );
  }
}
