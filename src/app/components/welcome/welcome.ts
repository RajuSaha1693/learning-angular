import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  @Input()
  fullName: string = '';

  @Output()
  dataEmitter = new EventEmitter<string>();

  showMessage() {
    this.dataEmitter.emit('Hello From Welcome Component');
  }
}
