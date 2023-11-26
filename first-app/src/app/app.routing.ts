import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { TodosComponent } from './components/todos/todos.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseItemComponent } from './components/expenses/expense-item/expense-item.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginGuard } from './services/guards/login.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '', // http://localhost:4200
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'users', // http://localhost:4200/users
    component: UsersComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'home',
    component: AuthComponent,
  },
  {
    path: 'expenses',
    component: ExpensesComponent,
    children: [
      {
        path: ':expenseId',
        component: ExpenseItemComponent,
      },
    ],
  },
  {
    path: '**', // does not match above specified paths
    component: PageNotFoundComponent,
  },
];
