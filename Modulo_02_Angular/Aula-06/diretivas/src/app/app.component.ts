import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'diretivas';
  isShow: boolean = true;

  toggleShow(): void {
    this.isShow = !this.isShow;
  }
}
