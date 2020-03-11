import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textocondicionado'
})
export class TextocondicionadoPipe implements PipeTransform {

  transform(value: string): string {
    let texto: string;

    if(value.length > 100){
      value = value.substr(0,100);
      texto = value;
    }else{
      texto = value;
    }

    return `${texto}...`;
  }

}
