import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], text: string): any[] {
    console.log(array)
    
    if(text == ''){
      return array;
    }

    text=text.toLowerCase();
    
    console.log(text)
    return array.filter( item=>{
      item.name.toLowerCase().includes(text);
    })
    
  }

}
