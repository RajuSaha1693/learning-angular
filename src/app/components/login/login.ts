import { FormsModule } from '@angular/forms';
import { LoginService } from './../../service/login-service';
import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Welcome } from '../welcome/welcome';

@Component({
  selector: 'app-login',
  imports: [FormsModule, Welcome],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string;
  password: string;
  fullName: string = '';
  isLoggedIn: boolean;
  welcomeMessage: string = '';
  constructor(private loginService: LoginService) {
    this.username = '';
    this.password = '';
    this.isLoggedIn = false;
  }

  login() {
    this.loginService.userLogin({ username: this.username, password: this.password });
    this.getResponse();
  }

  getResponse() {
    combineLatest([
      this.loginService.loggedStatusBroadCaster,
      this.loginService.loginBroadcaster,
    ]).subscribe(([logStatus, user]) => {
      this.isLoggedIn = logStatus;
      if (logStatus) {
        this.fullName = user?.fullname as string;
      }
    });
  }

  listentToEvent(event: string) {
    this.welcomeMessage = event;
  }
}
