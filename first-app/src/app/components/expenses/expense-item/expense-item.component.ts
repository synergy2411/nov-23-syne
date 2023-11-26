import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IExpense } from 'src/app/model/expenses';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css'],
})
export class ExpenseItemComponent implements OnInit {
  expenseId: string;

  expense: IExpense;

  constructor(
    private expenseService: ExpenseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.expenseId = params['expenseId'];
      this.fetchExpenses(this.expenseId);
    });
  }

  fetchExpenses(id: string) {
    this.expenseService
      .fetchExpense(id)
      .subscribe((data: IExpense) => (this.expense = data));
  }
}
