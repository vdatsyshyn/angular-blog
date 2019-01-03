import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length > 200) {
      return value.substr(0, 200) + ' ...';
    }
    return value;
  }
}
