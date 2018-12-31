export class Article {
  _id?: string;
  title: string;
  image: string;
  body: string;
  created?: {
    type: Date;
    default: Date;
  };
}
