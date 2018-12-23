import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../shared/models/article.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})

export class SinglePostComponent implements OnInit {
  @Input() public article: Article;

  constructor() {}

  ngOnInit(): void {
  }

}
