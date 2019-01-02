import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataSharingService } from '../services/data-sharing.service';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})

export class GetArticleResolverService implements Resolve<Article> {
  constructor(private dataSharingService: DataSharingService,
              private activatedRoute: ActivatedRoute) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article> | Promise<Article> | Article {
    // const id = this.activatedRoute.snapshot.paramMap.get('_id');
    return this.dataSharingService.getArticle(route.params['id']);
  }
}
