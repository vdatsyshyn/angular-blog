import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetArticlesResolverService } from './shared/resolvers/get-articles-resolver.service';
import { NewArticleComponent } from './new-article/new-article.component';
import { CreateArticleDeactivateGuardService } from './shared/guards/create-article-deactivate-guard.service';
import { DetailsArticleComponent } from './details-article/details-article.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, resolve: {getArticles: GetArticlesResolverService} },
  { path: 'articles/:id', component: DetailsArticleComponent },
  { path: 'create', component: NewArticleComponent, canDeactivate: [CreateArticleDeactivateGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
