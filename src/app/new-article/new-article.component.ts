import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataSharingService } from '../shared/services/data-sharing.service';
import { Article } from '../shared/models/article.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  public articleForm: FormGroup;

  constructor(private dataSharingService: DataSharingService,
              private router: Router) { }

  ngOnInit(): void {
    this.articleForm = new FormGroup({
      'body': new FormControl(null, [Validators.required]),
      'image': new FormControl(null, Validators.required),
      'title': new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    const newArticle = Object.assign({}, this.articleForm.value);
    this.dataSharingService.addArticle(newArticle).subscribe(
      (data: Article) => {
        this.articleForm.reset();
        this.router.navigate(['dashboard']);
      },
      (error: any) => console.log(error)
    );
  }
}
