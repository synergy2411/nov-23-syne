import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  // username = new FormControl('', [Validators.required, Validators.email]);
  // password = new FormControl('', [
  //   Validators.required,
  //   Validators.minLength(6),
  //   AuthComponent.exclamationValidator,
  // ]);
  // cnfPassword = new FormControl('', AuthComponent.confirmPasswordValidator);

  authForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.authForm = this.fb.group({
    //   username: this.username,
    //   password: this.password,
    //   cnfPassword: this.cnfPassword,
    // });

    this.authForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          AuthComponent.exclamationValidator,
        ],
      ],
      cnfPassword: ['', [AuthComponent.confirmPasswordValidator]],
      languages: this.fb.array([]),
    });
  }

  get languages() {
    return this.authForm.get('languages') as FormArray;
  }

  get username() {
    return this.authForm.get('username') as FormControl;
  }

  get password() {
    return this.authForm.get('password') as FormControl;
  }

  get cnfPassword() {
    return this.authForm.get('cnfPassword') as FormControl;
  }

  ngOnInit(): void {}

  onLogin() {
    console.log(this.authForm);
  }

  addLanguage() {
    this.languages.push(
      this.fb.group({
        name: '',
        experience: '',
      })
    );
  }

  onDeleteLanguage(index: number) {
    this.languages.removeAt(index);
  }

  static exclamationValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const hasExclamation = control.value.indexOf('!') >= 0;
    return hasExclamation ? null : { exclamation: true };
  }

  static confirmPasswordValidator(control: AbstractControl) {
    let isMatch = null;
    if (control.parent && control.parent.controls) {
      if (control.value === control.parent.controls['password'].value) {
        isMatch = true;
      }
    }
    return isMatch ? null : { cnfPasswordError: true };
  }
}
