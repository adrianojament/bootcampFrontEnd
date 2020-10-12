import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf',
})
export class CpfPipe implements PipeTransform {
  transform(cpf: string): string {
    if (cpf.length === 11) {
      return (
        cpf.substring(0, 3) +
        '.' +
        cpf.substring(3, 6) +
        '.' +
        cpf.substring(6, 9) +
        '-' +
        cpf.substring(9)
      );
    }
    return cpf;
  }
}
// 29931350822
// 01234567890
