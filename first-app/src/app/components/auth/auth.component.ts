import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    AuthComponent.exclamationValidator,
  ]);
  cnfPassword = new FormControl('', AuthComponent.confirmPasswordValidator);

  authForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      username: this.username,
      password: this.password,
      cnfPassword: this.cnfPassword,
    });
  }

  ngOnInit(): void {}

  onLogin() {
    console.log(this.authForm);
  }

  static exclamationValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const hasExclamation = control.value.indexOf('!') >= 0;
    return hasExclamation ? null : { exclamation: true };
  }

  static confirmPasswordValidator(control: AbstractControl) {
    console.log(control);
    let isMatch = null;
    if (control.parent && control.parent.controls) {
      if (control.value === control.parent.controls['password'].value) {
        isMatch = true;
      }
    }
    return isMatch ? null : { cnfPasswordError: true };
  }
}
