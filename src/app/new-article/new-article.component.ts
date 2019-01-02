import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DataSharingService } from '../shared/services/data-sharing.service';
import { Article } from '../shared/models/article.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  @ViewChild('articleForm') public articleForm: NgForm;
  public showImage = false;
  public formTitle: string;

  article: Article = {
    title: null,
    image: null,
    body: null
  };

  constructor(private dataSharingService: DataSharingService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parameterMap => {
      const id = parameterMap.get('id');
      this.getArticle(id);
    });
  }

  toggleImageShow() {
    this.showImage = !this.showImage;
  }

  private getArticle(id: string) {
    if (id === '0') {
      this.article = {
        title: null,
        image: null,
        body: null
      };
      this.formTitle = 'New Article';
      this.articleForm.reset();
    } else {
      this.formTitle = 'Update Article';
      this.dataSharingService.getArticle(id).subscribe(
        (article) => this.article = article,
        (err: any) => console.log(err)
      );
    }
  }

  onSubmit(): void {
    if (this.article._id == null) {
      this.dataSharingService.addArticle(this.article).subscribe(
        (data: Article) => {
          this.articleForm.reset();
          this.router.navigate(['dashboard']);
        },
        (error: any) => console.log(error)
      );
    } else {
      this.dataSharingService.updateArticle(this.article).subscribe(
        () => {
          this.articleForm.reset();
          this.router.navigate(['dashboard']);
        },
        (error: any) => console.log(error)
      );
    }
  }
}
