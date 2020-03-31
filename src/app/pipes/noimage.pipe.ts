import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  //https://espamidiomas.azurewebsites.net
  //https://api.cmfconstructora.com.ec
  transform(value: string): any {
    const url = "https://espamidiomas.azurewebsites.net/images/";
    return `${url}${value}`;
  }

}
