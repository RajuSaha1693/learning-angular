import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { Login } from './components/login/login';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('learning-angular');
  pageName: string;
  isDisabled: boolean;
  constructor() {
    this.pageName = 'Home Page';
    this.isDisabled = false;
  }
}
