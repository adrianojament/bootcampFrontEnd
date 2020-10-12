import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  todos: string[] = [];

  add(newTodo: string) {
    this.todos = [...this.todos, newTodo];
  }
}
