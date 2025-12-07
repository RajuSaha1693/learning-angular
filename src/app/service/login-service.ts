import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
interface UserCredentials {
  username: string;
  password: string;
  fullname?: string;
}
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  username: string;
  password: string;
  isLoggedIn: boolean;
  userInfo: UserCredentials = {} as UserCredentials;
  //For shared service created a subject
  private loginSubject = new Subject<UserCredentials>();
  private loggedStatus = new Subject<boolean>();
  //Declare the broadcaster
  loginBroadcaster = this.loginSubject.asObservable();
  loggedStatusBroadCaster = this.loggedStatus.asObservable();
  constructor() {
    this.username = 'admin';
    this.password = 'admin@123';
    this.isLoggedIn = false;
  }

  userLogin(credentials: UserCredentials) {
    if (this.username === credentials.username && this.password === credentials.password) {
      this.isLoggedIn = true;
      this.userInfo.fullname = 'Raju Saha';
      this.loginSubject.next(this.userInfo);
      this.loggedStatus.next(this.isLoggedIn);
    } else {
      this.loginSubject.next({ username: '', password: '' });
      this.loggedStatus.next(this.isLoggedIn);
    }
  }

  getUserInfo() {
    return this.userInfo;
  }
}
