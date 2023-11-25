import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { IComment } from 'src/app/model/comment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit, AfterViewInit {
  @ViewChild('commentForm') commentForm: NgForm;

  @Output() newCommentEvent = new EventEmitter<IComment>();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.commentForm.controls['stars'].setValue('5');
    });
  }

  onSubmit(commentForm: NgForm) {
    let newComment = commentForm.value;
    this.newCommentEvent.emit(newComment);
  }
}
