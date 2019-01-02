import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ArticleDetailsGuardService implements CanActivate {
  constructor(private dataSharingService: DataSharingService,
              private router: Router) {
    console.log('Article details guard');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean> {
    return this.dataSharingService.getArticle(route.paramMap.get('id'))
      .pipe(
        map(article => {
          const articleExists = !!article;
          console.log('articleExists: ', articleExists);
          if (articleExists) {
            console.log('IF');
            return true;
          } else {
            console.log('Else');
            this.router.navigate(['notFound']);
            return false;
          }
        }),
        catchError((err) => {
          console.log(err);
          return of(false);
        })
      );
  }
}
