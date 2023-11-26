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
    this.fetchTodos();
  }

  fetchTodos() {
    this.todoService
      .fetchAllTodos()
      .subscribe((data: ITodo[]) => (this.todoCollection = data));
  }

  addNewTodo(todo: ITodo) {
    this.todoCollection.push(todo);
  }

  onDelete(todoId: string) {
    this.todoService.deleteTodo(todoId).subscribe((data) => {
      let position = this.todoCollection.findIndex(
        (todo) => todo.id === todoId
      );
      this.todoCollection.splice(position, 1);

      // this.todoCollection = this.todoCollection.filter(
      //   (todo) => todo.id != todoId
      // );

      // this.fetchTodos();
    });
  }
}
