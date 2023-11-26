import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { TodosComponent } from './components/todos/todos.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseItemComponent } from './components/expenses/expense-item/expense-item.component';

export const APP_ROUTES: Routes = [
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
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
