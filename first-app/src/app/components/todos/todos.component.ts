import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todoCollection: ITodo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService
      .fetchAllTodos()
      .subscribe((data: ITodo[]) => (this.todoCollection = data));
  }
}
