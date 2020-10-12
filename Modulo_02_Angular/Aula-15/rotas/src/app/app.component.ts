import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rotas';

  constructor(private router: Router) {}

  gotoPage2() {
    this.router.navigate(['page2', '3']);
  }
}
