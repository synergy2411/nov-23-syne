import { Pipe, PipeTransform } from '@angular/core';

interface ITodo {
  label: string;
  status: string;
}

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(todoCollection: ITodo[], filteredStatus: string): ITodo[] {
    if (filteredStatus === '') {
      return todoCollection;
    }
    let resultArray = [];
    for (let todo of todoCollection) {
      if (todo['status'] === filteredStatus) {
        resultArray.push(todo);
      }
    }
    return resultArray;
  }
}
