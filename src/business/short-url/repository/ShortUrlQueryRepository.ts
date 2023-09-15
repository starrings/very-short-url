import { execute } from '../../../common/module/Database';
import { Service } from 'typedi';

import { shortUrlQuery } from './query/ShortUrlQuery';

@Service()
export class ShortUrlQueryRepository {
  public async selectOriginalUrlByShortUrl(shortUrl: string): Promise<string> {
    const exceuteQueryResult = await execute<{ originalUrl: string }[]>(shortUrlQuery.selectOriginalUrlByShortUrl, [
      shortUrl,
    ]);

    return exceuteQueryResult[0] ? exceuteQueryResult[0].originalUrl : '';
  }
}
