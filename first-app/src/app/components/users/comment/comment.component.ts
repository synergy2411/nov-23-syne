import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/model/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() comments: IComment[];

  tab = 0;

  constructor() {}

  ngOnInit(): void {}
}
