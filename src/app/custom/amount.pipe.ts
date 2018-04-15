import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(value: any, arg1: any, arg2?: any): any {
    return arg1 + ' ' + value;
  }

}
