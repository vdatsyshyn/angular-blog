import { Article } from './shared/models/article.model';

export class ResolvedArticleslistModel {
  constructor(public articlesList: Article[], public error: any = null) {}
}
