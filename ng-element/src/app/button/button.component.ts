import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-button',
  template: ` <button (click)="handleClick()">{{ label }}</button> `,
  styles: [
    `
      button {
        border: none;
        background-color: tomato;
        color: #fff;
        padding: 12px 24px;
        display: inline-block;
        margin: 18px;
        font-size: 1.2rem;
        font-weight: 700;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ButtonComponent implements OnInit {
  @Input() label: string = 'Default Label';

  @Output() action = new EventEmitter();

  numberOfClick = 0;

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.numberOfClick++;
    this.action.emit(this.numberOfClick);
  }
}
