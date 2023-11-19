import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
})
export class LifeCycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() company: string;

  @ViewChild('content') paragraphEl: ElementRef;

  @ContentChild('heading') headingRef: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit', this.paragraphEl.nativeElement);
    console.log('ngAfterContentInit', this.headingRef.nativeElement);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.paragraphEl.nativeElement);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngOnInit(): void {
    console.log('ngOnInit', this.headingRef.nativeElement);
  }
}
