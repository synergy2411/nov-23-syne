import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(commentForm: NgForm) {
    console.log(commentForm);
  }
}
