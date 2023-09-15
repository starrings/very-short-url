import { IsUrl } from 'class-validator';

export class convertShortUrlRequest {
  @IsUrl()
  public originalUrl!: string;
}
