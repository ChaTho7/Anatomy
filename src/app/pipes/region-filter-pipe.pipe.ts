import { Pipe, PipeTransform } from '@angular/core';
import { Region } from '../models/region';

@Pipe({
  name: 'regionFilterPipe',
})
export class RegionFilterPipePipe implements PipeTransform {
  transform(value: Region[], filterText: string): Region[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (t: Region) => t.name.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
