import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ArticleDetailsGuardService implements CanActivate {
  constructor(private dataSharingService: DataSharingService,
              private router: Router) {
    console.log('Article details guard');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    const articleExists = !!this.dataSharingService.getArticle(route.paramMap.get('id'));

    console.log('articleExists: ', articleExists);
    if (articleExists) {
      console.log('IF');
      return true;
    } else {
      console.log('Else');
      this.router.navigate(['/notFound']);
      return false;
    }
  }
}
