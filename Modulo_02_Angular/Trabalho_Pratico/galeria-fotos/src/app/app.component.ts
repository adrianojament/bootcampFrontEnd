import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'galeria-fotos';
  photos: string[] = [
    'assets/foto_01.jpg',
    'assets/foto_02.jpg',
    'assets/foto_03.jpg',
    'assets/foto_04.jpg',
    'assets/foto_05.jpg',
    'assets/foto_06.jpg',
  ];
}
