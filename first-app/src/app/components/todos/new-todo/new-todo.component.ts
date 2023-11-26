import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITodo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent implements OnInit {
  label: string = '';

  @Output() todoEvent = new EventEmitter<ITodo>();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onAddLabel() {
    let todo = {
      label: this.label,
    };
    this.todoService.createTodo(todo).subscribe((data: ITodo) => {
      console.log('CREATED : ', data);
      this.todoEvent.emit(data);
      this.label = '';
    });
  }
}
