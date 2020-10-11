import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [],
})
export class CounterComponent implements OnInit, OnChanges {
  //OnChanges -> Somente é disparado quando o atributo Input sofre modificacao
  @Input() label: string = '';
  counter: number = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ' + JSON.stringify(changes));
  }

  ngOnInit(): void {}

  increment(): void {
    this.counter++;
  }
}
