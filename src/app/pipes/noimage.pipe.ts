import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  //https://espamidiomas.azurewebsites.net
  
  transform(value: string): any {
    const url = "https://api.cmfconstructora.com.ec/images/";
    return `${url}${value}`;
  }

}
