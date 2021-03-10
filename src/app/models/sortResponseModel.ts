import { ResponseModel } from './responseModel';
import { Sort } from './sort';

export interface SortResponseModel extends ResponseModel {
  data: Sort[];
}
