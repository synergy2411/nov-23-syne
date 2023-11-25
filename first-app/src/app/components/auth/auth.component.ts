import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl();

  authForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      username: this.username,
      password: this.password,
    });
  }

  ngOnInit(): void {}

  onLogin() {
    console.log(this.authForm);
  }
}
