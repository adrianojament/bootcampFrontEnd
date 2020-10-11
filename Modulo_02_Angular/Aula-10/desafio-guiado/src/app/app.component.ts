import { Component } from '@angular/core';
import { Exercise } from './interfaces/exercise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio-guiado';
  config: boolean= false;  
  exercises: Exercise[]=[{
    name:'Esteira',
    duration: 30,
    repetitions: 3,
    preparations: 15,
    rest: 20
  }];
}
