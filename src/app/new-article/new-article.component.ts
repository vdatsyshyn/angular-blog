import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { DataSharingService } from '../shared/services/data-sharing.service';
import { Article } from '../shared/models/article.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  @ViewChild('articleForm') public articleForm: NgForm;

  article: Article = {
    title: null,
    image: null,
    body: null
  };

  constructor(private dataSharingService: DataSharingService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const newArticle: Article = Object.assign({}, this.article);
    this.dataSharingService.addArticle(newArticle).subscribe(
      (data: Article) => {
        this.articleForm.reset();
        this.router.navigate(['dashboard']);
      },
      (error: any) => console.log(error)
    );
  }
}
