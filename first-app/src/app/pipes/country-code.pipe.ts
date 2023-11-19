import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
})
export class CountryCodePipe implements PipeTransform {
  transform(value: any, code: string = '0'): string {
    switch (code) {
      case 'US':
        return '+1 ' + value;
      case 'EUR':
        return '+21 ' + value;
      case 'AUS':
        return '+42 ' + value;
      default:
        return '+91 ' + value;
    }
  }
}
