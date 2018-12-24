import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Article } from '../models/article.model';
import { Observable } from 'rxjs';
import { DataSharingService } from '../services/data-sharing.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GetArticleResolverService implements Resolve<Article> {
  constructor(private dataSharingService: DataSharingService,
              private activatedRoute: ActivatedRoute) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article> | Promise<Article> | Article {
    // const id = this.activatedRoute.snapshot.paramMap.get('_id');
    return this.dataSharingService.getArticle(route.params['id'])
      .pipe(
        map((data: Article) => {
          return data;
        })
      );
  }

}
