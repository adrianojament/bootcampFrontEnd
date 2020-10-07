import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rating';
  movies = [
    {
      title: 'Os Vingadores',
      rating: 5,
    },
    {
      title: 'Joias Brutas',
      rating: 3,
    },
    {
      title: 'Parasita',
      rating: 5,
    },
    {
      title: 'O Irlandês',
      rating: 4,
    },
    {
      title: 'Pantera Negra',
      rating: 4,
    },
  ];
}
