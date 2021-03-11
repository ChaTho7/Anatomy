import { ResponseModel } from './responseModel';
import { TissueImage } from './tissueImage';

export interface TissueImageResponseModel extends ResponseModel {
  data: TissueImage[];
}
