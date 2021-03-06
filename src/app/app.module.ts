import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppHeaderComponent } from './shared/components/app-header/app-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { ShortenTextPipe } from './shared/pipes/shorten-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    DashboardComponent,
    SingleArticleComponent,
    NewArticleComponent,
    DetailsArticleComponent,
    PageNotFoundComponent,
    HighlightDirective,
    ShortenTextPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
