import { Pipe, PipeTransform } from '@angular/core';
import { Sort } from '../models/sort';

@Pipe({
  name: 'sortFilterPipe',
})
export class SortFilterPipePipe implements PipeTransform {
  transform(value: Sort[], filterText: string): Sort[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (t: Sort) => t.name.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
