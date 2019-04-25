import { Pipe, PipeTransform } from '@angular/core';
import { Furniture } from './models/furniture.model';

@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {

  transform(input: Furniture[]) {
    input.sort((a, b) => {
      let aId = parseInt(a.id);
      let bId = parseInt(b.id);
      if (aId < bId) {
        return -1;
      }
      else if (aId > bId) {
        return 1;
      }
      else {
        return 0;
      }

    })
    return input;
  }

}