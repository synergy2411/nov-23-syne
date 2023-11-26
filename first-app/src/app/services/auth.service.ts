import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  constructor() {}

  onLogin(email: string, password: string) {
    let obs$ = new Observable((observer) => {
      setTimeout(() => {
        // Verify credentials from database here
        if (email === 'test@test' && password === 'test!123') {
          // User is authenticated
          this.isLoggedIn = true;
          return observer.next({ isAuthenticated: true });
        }
        return observer.next({ isAuthenticated: false });
      }, 1500);
    });
    return obs$;
  }

  isUserAuthenticated() {
    return this.isLoggedIn;
  }
}
