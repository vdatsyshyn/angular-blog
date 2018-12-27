import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../shared/models/article.model';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {
  article: Article;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      this.article = data.getArticle;
    });
  }
}
