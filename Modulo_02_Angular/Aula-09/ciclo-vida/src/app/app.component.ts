import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ciclo-vida';
  IDs: number[] = [];
  lastID: number = 0;
  label: string = '';

  remove(id: number): void {
    this.IDs.splice(this.IDs.indexOf(id), 1);
  }

  add() {
    this.IDs = [...this.IDs, ++this.lastID];
  }
}
