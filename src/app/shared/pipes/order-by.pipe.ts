import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform<T extends object, K extends keyof T>(value: T[] | null, key: K, isAsc: boolean | string = false): T[] | null {
    if (value === null) return null;
    
    if(!isAsc){isAsc = false}
    
    isAsc = isAsc.toString() === 'true';
    return value.sort((a: T, b: T) => {
      // тут сложность может быть в том, что не для всех типов значения можно применять сравнение
      if (a[key] > b[key]) return isAsc ? 1 : -1;
      if (a[key] < b[key]) return isAsc ? -1 : 1;
      return 0;
    });
  }

}

