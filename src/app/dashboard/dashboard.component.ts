import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../shared/models/article.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  articles: Article[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      console.log(data, 'Yes');
      this.articles = data.getArticles;
    });
  }

  viewArticleDetails(article: Article): void {
    this.router.navigate(['/articles', article._id]);
  }
}
