import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { DataSharingService } from '../services/data-sharing.service';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})

export class GetArticlesResolverService implements Resolve<Article[] | string> {
  constructor(private dataSharingService: DataSharingService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article[] | string> {
    return this.dataSharingService.getArticles()
      .pipe(
        catchError((err: string) => of(err))
      );
  }
}
