import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  fetchAllTodos() {
    return this.http.get(`${this.baseURL}/todos`);
  }

  createTodo(todo: ITodo) {
    return this.http.post(`${this.baseURL}/todos`, todo, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
