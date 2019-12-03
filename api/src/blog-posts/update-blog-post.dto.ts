export class UpdateBlogPostDto {
  readonly secret: string;
  readonly title: string;
  readonly slug: string;
  readonly mainTag: string;
  readonly description: string;
  readonly thumbnail: string;
  readonly cover: string;
  readonly content: string;
  readonly author: string;
  readonly isPublished: boolean;
}
