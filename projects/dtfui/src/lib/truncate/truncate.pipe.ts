import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dtfTruncate'
})
export class DTFTruncatePipe implements PipeTransform {

  public transform(value: string = '', length: number = 100): string {
    let availableCharacters = value.slice(0, length);

    if (value.length > length) {
      availableCharacters += '...';
    }

    return availableCharacters;
  }
}
