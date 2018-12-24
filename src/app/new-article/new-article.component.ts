import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataSharingService } from '../shared/services/data-sharing.service';
import { Article } from '../shared/models/article.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  public articleForm: FormGroup;

  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this.articleForm = new FormGroup({
      'body': new FormControl(null, [Validators.required]),
      'image': new FormControl(null, Validators.required),
      'title': new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    console.log(this.articleForm.value);
    this.dataSharingService.addArticle(this.articleForm.value).subscribe(
      (data: Article) => {
        console.log(data);
        this.articleForm.reset();
      },
      (error: any) => console.log(error)
    );
  }
}
