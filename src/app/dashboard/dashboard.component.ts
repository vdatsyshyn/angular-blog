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

  filteredArticles: Article[];

  private prSearchInput: string;

  get searchInput(): string {
    return this.prSearchInput;
  }

  set searchInput(value: string) {
    this.prSearchInput = value;
    this.filteredArticles = this.filterArticles(value);
  }

  filterArticles(searchInput: string): Article[] {
    return this.articles.filter(article => article.title.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1);
  }

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      console.log(data, 'Yes');
      this.articles = data.getArticles;
    });

    this.filteredArticles = this.articles;
  }

  viewArticleDetails(id: string): void {
    this.router.navigate(['/articles', id]);
  }
}
