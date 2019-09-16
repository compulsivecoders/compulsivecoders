export class CreateBlogPostDto {
  readonly title: string;
  readonly slug: string;
  readonly category: string;
  readonly thumbnail: string;
  readonly cover: string;
  readonly content: string;
  readonly author: string;
}
