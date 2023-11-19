import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
})
export class PipeDemoComponent implements OnInit {
  filteredStatus = '';

  expense = {
    title: 'renew car insurance',
    amount: 199.6667,
    createdAt: new Date('Dec 20, 2022'),
  };

  contactNumber = 987654321;

  promiseObj = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data arrive in application'), 2000);
  });

  todoCollection = [
    { label: 'grocery', status: 'pending' },
    { label: 'shopping', status: 'completed' },
    { label: 'insurance', status: 'pending' },
    { label: 'planting', status: 'completed' },
  ];

  onAddNew() {
    this.todoCollection.push({ label: 'New Item', status: 'pending' });
  }

  constructor() {}

  ngOnInit(): void {}
}
