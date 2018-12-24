import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetArticlesResolverService } from './shared/resolvers/get-articles-resolver.service';
import { NewArticleComponent } from './new-article/new-article.component';
import { CreateArticleDeactivateGuardService } from './shared/guards/create-article-deactivate-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, resolve: {getArticles: GetArticlesResolverService} },
  { path: 'create', component: NewArticleComponent, canDeactivate: [CreateArticleDeactivateGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
