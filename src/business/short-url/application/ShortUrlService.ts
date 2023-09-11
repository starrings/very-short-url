import { Service } from 'typedi';

import { ShortUrlRepository } from '../repository/ShortUrlCommendRepository';

import { 
  RANDOM_CHARACTER_LIST,
  LIMIT_CHARACTER_NUMBER 
} from '../model/constant/ShortUrlConstant';

import { convertShortUrlRequest } from '../model/request/ShortUrlRequest';

import { ConvertShortUrlResponse } from '../response/ShortUrlResponse';

@Service()
export class ShortUrlService {
  constructor(
    private shortUrlRepository: ShortUrlRepository, 
  ) {}

  public async convertShortUrl(convertShortUrlRequest: convertShortUrlRequest) {
    const { originalUrl } = convertShortUrlRequest;
    const shortUrl = await this.shortenUrl();
    console.log(shortUrl);
    
    await this.shortUrlRepository.insertShortUrl(originalUrl, shortUrl);
    console.log(shortUrl);
    return new ConvertShortUrlResponse(shortUrl);
  }

  private shortenUrl() {
    let randomShortUrl: string = "";
    for(let i = 0; i < LIMIT_CHARACTER_NUMBER; i++) {
      randomShortUrl += RANDOM_CHARACTER_LIST[Math.floor(Math.random() * RANDOM_CHARACTER_LIST.length)];
    }

    return randomShortUrl;
  }
}