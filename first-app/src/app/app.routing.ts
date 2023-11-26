import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { TodosComponent } from './components/todos/todos.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseItemComponent } from './components/expenses/expense-item/expense-item.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginGuard } from './services/guards/login.guard';

export const APP_ROUTES: Routes = [
  {
    path: 'users',
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
];
