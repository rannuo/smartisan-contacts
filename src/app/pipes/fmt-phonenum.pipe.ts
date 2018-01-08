import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fmtPhonenum'
})
export class FmtPhonenumPipe implements PipeTransform {
  transform(value: string): string {
    return value.slice(0, 3) + ' ' + value.slice(3, 7) + ' ' + value.slice(7, 11);
  }
}
