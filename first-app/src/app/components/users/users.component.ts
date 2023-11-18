import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  user = {
    firstName: 'bill',
    lastName: 'gates',
    income: 10000,
    isWorking: true,
    dob: new Date('Dec 21, 1965'),
    company: 'Microsoft',
    img: './assets/images/bill.jpg',
    votes: 120,
  };

  onMoreInfo(usr) {
    alert(`Mr. ${usr.lastName} is working with ${usr.company}!`);
  }

  // changeVotes(event) {
  //   // console.log(event.target.value);
  //   this.user.votes = event.target.value;
  // }
}
