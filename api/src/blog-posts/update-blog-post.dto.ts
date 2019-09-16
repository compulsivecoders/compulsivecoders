export class UpdateBlogPostDto {
  readonly id: number;
  readonly title: string;
  readonly slug: string;
  readonly category: string;
  readonly description: string;
  readonly thumbnail: string;
  readonly cover: string;
  readonly content: string;
  readonly author: string;
}
