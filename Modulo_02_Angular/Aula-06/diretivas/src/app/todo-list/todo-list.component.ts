import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  newTask: string = '';
  tasks: TodoItem[] = [
    { description: 'Arrumar a cama', done: false },
    { description: 'Escovar os dentes', done: true },
    { description: 'Tomar Cafe', done: false },
  ];

  addTask(): void {
    this.tasks = [...this.tasks, { description: this.newTask, done: false }];
    this.newTask = '';
  }

  removeTask(index: number): void {
    this.tasks = this.tasks.filter((_, id) => id !== index);
  }
}
