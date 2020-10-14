import { Pipe, PipeTransform } from '@angular/core';
import { ServicesSenatorsService } from '../services/services-senators.service';

@Pipe({
  name: 'getExpense',
  pure: false,
})
export class GetExpensePipe implements PipeTransform {
  constructor(private serviceSenator: ServicesSenatorsService) {}

  transform(id: number): string {
    return this.serviceSenator.getExpensive(id);
  }
}
