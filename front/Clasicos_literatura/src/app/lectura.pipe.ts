import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lectura'
})
export class LecturaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
