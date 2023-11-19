import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() favColor: string = 'aqua';

  @HostBinding('style.background-color') bgColor: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = this.favColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = 'transparent';
  }

  // constructor(private elRef: ElementRef) {
  // console.log(this.elRef.nativeElement);
  // this.elRef.nativeElement.style.backgroundColor = 'yellow';
  // }
}
