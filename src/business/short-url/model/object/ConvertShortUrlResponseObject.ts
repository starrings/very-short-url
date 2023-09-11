import { IsUrl } from 'class-validator';

export class ConvertShortUrlResponseObject {
  @IsUrl()
  public shortUrl: string;

  constructor(shortUrl: string, message: string) {
    this.shortUrl = shortUrl;
  }
}