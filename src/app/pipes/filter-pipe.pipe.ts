import { Pipe, PipeTransform } from '@angular/core';
import { TissueDetail } from '../models/tissueDetail';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(value: TissueDetail[], filterText: string): TissueDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (t: TissueDetail) =>
            t.name.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
