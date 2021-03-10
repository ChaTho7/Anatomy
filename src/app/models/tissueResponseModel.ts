import { ResponseModel } from './responseModel';
import { Tissue } from './tissue';

export interface TissueResponseModel extends ResponseModel {
  data: Tissue[];
}
