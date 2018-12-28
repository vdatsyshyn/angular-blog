import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private readonly postsApi = 'http://localhost:3000/api/posts';

  constructor(private http: HttpClient) { }

  handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client side error: ', errorResponse.error.message);
    } else {
      console.error('Server side error: ', errorResponse);
    }

    return throwError('Something bad happened; please try again later.');
  }

  getArticles(): Observable<Article[]> {
    return this.http.get(this.postsApi)
      .pipe(
        delay(1000),
        map((data: Article[]) => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  getArticle(id: string): Observable<Article> {
    const url = `${this.postsApi}/${id}`;
    return this.http.get<Article>(url)
      .pipe(
        map((data: Article) => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  addArticle(article: Article): Observable<Article> {
    console.log('the request');
    console.log(article);
    return this.http.post<Article>(this.postsApi, article, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      catchError(this.handleError)
    );
  }
}
