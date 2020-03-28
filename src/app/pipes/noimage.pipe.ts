import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: string): any {
    const url = "https://espamidiomas.azurewebsites.net/images/";
    return `${url}${value}`;
  }

}
