import { Component, Input, OnInit } from '@angular/core';

import { Article } from '../shared/models/article.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})

export class SingleArticleComponent implements OnInit {
  @Input() public article: Article;

  constructor() {}

  ngOnInit(): void {
  }
}
