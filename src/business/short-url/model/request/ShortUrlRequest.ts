import { IsUrl } from 'class-validator';

export class ShortUrlRequest {
  @IsUrl()
  public shortUrl!: string;
}