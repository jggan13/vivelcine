import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textocondicionado'
})
export class TextocondicionadoPipe implements PipeTransform {

  transform(value: string): string {
    let texto: string;

    if(value.length > 50){
      value = value.substr(0,50);
      texto = value;
    }else{
      texto = value;
    }

    return `${texto}...`;
  }

}
