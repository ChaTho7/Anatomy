import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Sort } from '../models/sort';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor(private httpClient: HttpClient) {}

  tissueApiURL = 'https://localhost:44344/api/sorts/getall';

  getSorts(): Observable<ListResponseModel<Sort>> {
    return this.httpClient.get<ListResponseModel<Sort>>(this.tissueApiURL);
  }
}
