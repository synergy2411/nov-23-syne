import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class ParentComponent {
  companyName = 'Synechron';

  toggle = true;

  onChildEvent(childValue: string) {
    console.log('Child Value : ', childValue);
  }
}
