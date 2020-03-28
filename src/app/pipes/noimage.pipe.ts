import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: string): any {
    const url = "https://api.cmfconstructora.com.ec/images/";
    return `${url}${value}`;
  }

}
