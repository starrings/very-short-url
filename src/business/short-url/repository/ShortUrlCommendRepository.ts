import { DMLResult } from '../../../common/model/DMLResultModel';
import { execute } from '../../../common/module/Database';
import { Service } from 'typedi';

// @Service()
// export class ShortUrlRepository {
//   public async insertShortUrl(shortUrl: string): Promise<DMLResult[]> {
//     return await execute<DMLResult[]>(shortUrlCommend.insertShortUrl, [shortUrl]);
//   }
// }