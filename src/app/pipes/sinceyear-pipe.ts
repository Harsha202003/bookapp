import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinceyear'
})
export class SinceyearPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
