import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { NewArticleComponent } from '../../new-article/new-article.component';

@Injectable({
  providedIn: 'root'
})

export class CreateArticleDeactivateGuardService implements CanDeactivate<NewArticleComponent> {
  canDeactivate(component: NewArticleComponent): boolean {
    if (component.articleForm.dirty) {
      return confirm('Are you sure you want to leave the form?');
    }
    return true;
  }
}
