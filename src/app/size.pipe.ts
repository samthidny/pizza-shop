import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'size'
})
export class SizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const chars: Array = value.split('');
    chars[0] = chars[0].toUpperCase();
    const rtn = chars.join('');
    return rtn;
  }

}
