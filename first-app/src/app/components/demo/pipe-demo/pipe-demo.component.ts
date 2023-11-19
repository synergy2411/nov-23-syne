import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
})
export class PipeDemoComponent implements OnInit {
  expense = {
    title: 'renew car insurance',
    amount: 199.6667,
    createdAt: new Date('Dec 20, 2022'),
  };

  contactNumber = 987654321;

  promiseObj = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data arrive in application'), 2000);
  });

  constructor() {}

  ngOnInit(): void {}
}
