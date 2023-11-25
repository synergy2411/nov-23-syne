import { Component, OnInit } from '@angular/core';
import {
  Subscription,
  interval,
  timer,
  from,
  Observable,
  distinct,
  filter,
  map,
  take,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
} from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent implements OnInit {
  interval$ = interval(1000);

  timer$ = timer(2000);

  from$ = from([101, 102, 103]);

  unSub: Subscription;

  // Custom Observable
  obs$ = new Observable((observer) => {
    setTimeout(() => observer.next('Ross'), 1000);
    setTimeout(() => observer.next('Rachel'), 2000);
    setTimeout(() => observer.next('Monica'), 4000);
    setTimeout(() => observer.next('Joey'), 5500);
    setTimeout(() => observer.next('Joey'), 6000);
    setTimeout(() => observer.next('Joey'), 6500);
    // setTimeout(() => observer.error(new Error('Something bad happened')), 6000);

    setTimeout(() => observer.complete(), 8000);
  });

  constructor() {}

  ngOnInit(): void {
    // Subject
    // let subject = new Subject();

    // subject.subscribe((data) => console.log('Subs 1 :', data));

    // subject.next(101);
    // subject.next(102);

    // subject.subscribe((data) => console.log('Subs 2:', data));

    // subject.next(103);
    // subject.next(104);

    // BEHAVIOUR SUBJECT
    // let subject = new BehaviorSubject(100);
    // subject.subscribe((data) => console.log('Subs 1 :', data));

    // subject.next(101);
    // subject.next(102);

    // subject.subscribe((data) => console.log('Subs 2:', data));

    // subject.next(103);
    // subject.next(104);

    // REPLAY SUBJECT
    // let subject = new ReplaySubject(2);
    // subject.subscribe((data) => console.log('Subs 1 :', data));

    // subject.next(99);
    // subject.next(101);
    // subject.next(102);

    // subject.subscribe((data) => console.log('Subs 2:', data));

    // subject.next(103);
    // subject.next(104);

    // ASYNC SUBJECT
    let subject = new AsyncSubject();
    subject.subscribe((data) => console.log('Subs 1 :', data));

    subject.next(99);
    subject.next(101);
    subject.next(102);

    subject.subscribe((data) => console.log('Subs 2:', data));

    subject.next(103);
    subject.next(104);

    subject.complete();
  }

  onCustomObsSubs() {
    this.obs$
      .pipe(
        take(3)
        // distinct(),
        // filter((value: string) => value.length > 4),
        // filter((value: string) => value.includes('M')),
        // map((value) => `${value} is BFF`)
      )
      .subscribe({
        next: (data) => console.log('Data : ', data),
        error: (err) => console.error(err),
        complete: () => console.log('COMPLETED'),
      });
  }

  onFromSubs() {
    this.from$.subscribe(console.log);
  }

  onTimerSubsribe() {
    this.timer$.subscribe((data) => console.log('Timer  : ', data));
  }

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
