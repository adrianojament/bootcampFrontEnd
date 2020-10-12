import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipes';
  text = 'Uma mensagem qq';
  value: number = 12050.4983;
  today: Date = new Date();
  myCep = '13468830';
  myCPF = '29931350822';
  Strings: string[] = ['gato', 'macaco'];

  addString(value: string): void {
    // Mexe automatico pois cria um novo objeto na DOM
    //this.Strings = [...this.Strings, value];

    // Dessa forma tem que colocar com pipe pure = false
    // para ele atualizar a DOM
    this.Strings.push(value);
  }
}
