import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit, AfterViewInit {
  @ViewChild('commentForm') commentForm: NgForm;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.commentForm.controls['stars'].setValue('5');
    });
  }

  onSubmit(commentForm: NgForm) {
    console.log(commentForm);
  }
}
