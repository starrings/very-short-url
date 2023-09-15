import { Service } from 'typedi';
import { BadRequestError } from 'routing-controllers';

import { ShortUrlCommendRepository } from '../repository/ShortUrlCommendRepository';
import { ShortUrlQueryRepository } from '../repository/ShortUrlQueryRepository';

import { RANDOM_CHARACTER_LIST, LIMIT_CHARACTER_NUMBER } from '../model/constant/ShortUrlConstant';

import { convertShortUrlRequest } from '../model/request/ShortUrlRequest';

@Service()
export class ShortUrlService {
  constructor(
    private shortUrlCommendRepository: ShortUrlCommendRepository,
    private shortUrlQueryRepository: ShortUrlQueryRepository,
  ) {}

  public async convertShortUrl(convertShortUrlRequest: convertShortUrlRequest) {
    const { originalUrl } = convertShortUrlRequest;
    const shortUrl = this.shortenUrl();

    await this.shortUrlCommendRepository.insertShortUrl(originalUrl, shortUrl);
    return { shortUrl };
  }

  private shortenUrl() {
    let randomShortUrl: string = '';
    for (let i = 0; i < LIMIT_CHARACTER_NUMBER; i++) {
      randomShortUrl += RANDOM_CHARACTER_LIST[Math.floor(Math.random() * RANDOM_CHARACTER_LIST.length)];
    }

    return randomShortUrl;
  }

  public async getOriginalUrl(shortUrl: string) {
    const originalUrl = await this.shortUrlQueryRepository.selectOriginalUrlByShortUrl(shortUrl);

    if (originalUrl === '') {
      throw new BadRequestError('존재하지 않는 단축 url.');
    }

    return { originalUrl };
  }
}
