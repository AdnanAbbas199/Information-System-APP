import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  constructor( private router: Router) { }

  login(user: User) {
    if (user.userName !== '' && user.password !== '' ) {
      this.loggedIn.next(true);
      this.router.navigate(['/DataInformation']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['']);
  }
}
