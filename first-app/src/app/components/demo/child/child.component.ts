import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() company: string;

  @Output() childEvent = new EventEmitter();

  value: string = '';

  onSend() {
    console.log('VALUE : ', this.value);
    this.childEvent.emit(this.value);
  }
}
