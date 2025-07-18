import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',
})
export class UppercasePipe implements PipeTransform {
  transform(value: string): string {
    return (
      value.split(',')[0].toLocaleLowerCase() + value.split(',').slice(1).join()
    );
  }
}
