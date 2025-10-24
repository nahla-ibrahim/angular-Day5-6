import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../product/iproduct';

@Pipe({
  name: 'textslice',
})
export class TextslicePipe implements PipeTransform {
  transform(value: string, args: number): string {
    return value.slice(0, args) + '...';
  }
}
