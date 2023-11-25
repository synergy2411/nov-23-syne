import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user';
import { DataService } from 'src/app/services/data.service';
// import { USER_DATA } from 'src/app/model/mocks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.users = USER_DATA;
    this.users = this.dataService.getUserData();
  }

  onMoreInfo(usr: IUser) {
    alert(`Mr. ${usr.lastName} is working with ${usr.company}!`);
  }

  // changeVotes(event) {
  //   // console.log(event.target.value);
  //   this.user.votes = event.target.value;
  // }
}
