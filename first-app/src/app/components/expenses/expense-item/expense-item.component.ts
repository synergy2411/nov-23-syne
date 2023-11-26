import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
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

  onDelete() {
    if (confirm(`Are you sure to delete this item - ${this.expenseId}?`)) {
      this.expenseService.deleteExpense(this.expenseId).subscribe(() => {
        this.router.navigate(['/expenses'], {
          queryParams: { deleted: this.expenseId },
        });
      });
    }
  }
}
