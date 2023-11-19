import {
  Component,
  Input,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // encapsulation: ViewEncapsulation.Emulated,
  // encapsulation: ViewEncapsulation.None,
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
