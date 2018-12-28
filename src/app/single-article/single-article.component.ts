import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../shared/models/article.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})

export class SingleArticleComponent implements OnInit {
  @Input() public article: Article;
  private selectedArticleId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.selectedArticleId = this.route.snapshot.paramMap.get('id');
  }
}
