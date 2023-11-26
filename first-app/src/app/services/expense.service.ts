import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  fetchAllExpenses() {
    return this.http.get(`${this.baseUrl}/expenses`);
  }

  fetchExpense(id: string) {
    return this.http.get(`${this.baseUrl}/expenses/${id}`);
  }
}
