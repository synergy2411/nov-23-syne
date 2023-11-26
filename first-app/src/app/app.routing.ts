import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { TodosComponent } from './components/todos/todos.component';

export const APP_ROUTES: Routes = [
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
];
