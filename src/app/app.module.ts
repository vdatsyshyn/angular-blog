import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppHeaderComponent } from './shared/components/app-header/app-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { DetailsArticleComponent } from './details-article/details-article.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    DashboardComponent,
    SingleArticleComponent,
    NewArticleComponent,
    DetailsArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
