import { DMLResult } from '../../../common/model/DMLResultModel';
import { execute } from '../../../common/module/Database';
import { Service } from 'typedi';

import { shortUrlCommend } from './query/ShortUrlCommend';

@Service()
export class ShortUrlRepository {
  public async insertShortUrl(originalUrl: string, shortUrl: string): Promise<DMLResult[]> {
    return await execute<DMLResult[]>(shortUrlCommend.insertShortUrl, [originalUrl, shortUrl]);
  }
}