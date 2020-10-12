import { Component } from '@angular/core';
import { TodoListService } from './todoList.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public todoListService: TodoListService) {} // igual a criar uma propriedade
  title = 'servicos';
}
