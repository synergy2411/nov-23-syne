import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IExpense } from 'src/app/model/expenses';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  expenses: IExpense[];

  constructor(private expenseService: ExpenseService, private router: Router) {}

  ngOnInit(): void {
    this.expenseService
      .fetchAllExpenses()
      .subscribe((data: IExpense[]) => (this.expenses = data));
  }

  onItemSelected(expense: IExpense) {
    this.router.navigate(['/expenses/' + expense.id]);
  }
}
