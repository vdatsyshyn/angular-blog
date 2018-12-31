import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Article } from '../shared/models/article.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})

export class SingleArticleComponent implements OnInit {
  public selectedArticleId: string;
  @Input() public article: Article;
  @Input() searchInput: string;

  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.selectedArticleId = this.route.snapshot.paramMap.get('id');
  }


  readArticle() {
    this.router.navigate(['/articles', this.article._id], {
      queryParams: {
        'searchTerm': this.searchInput,
      }
    });
  }

  updateArticle() {
    this.router.navigate(['/edit', this.article._id]);
  }
}
