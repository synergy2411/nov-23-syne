import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent implements OnInit {
  interval$ = interval(1000);

  unSub: Subscription;

  constructor() {}

  ngOnInit(): void {}

  onIntervalSubscribe() {
    this.unSub = this.interval$.subscribe({
      next: (data) => console.log('Data : ', data),
      error: (err) => console.error(err),
      complete: () => console.log('COMPLETED'),
    });
  }

  onIntervalUnsubscribe() {
    this.unSub.unsubscribe();
  }
}
