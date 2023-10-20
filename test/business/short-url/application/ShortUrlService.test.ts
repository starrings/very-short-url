import 'reflect-metadata';
import { ShortUrlService } from '../../../../src/business/short-url/application/ShortUrlService';
import { ShortUrlCommendRepository } from '../../../../src/business/short-url/repository/ShortUrlCommendRepository';
import { ShortUrlQueryRepository } from '../../../../src/business/short-url/repository/ShortUrlQueryRepository';
import { createDBPool, release } from '../../../../src/common/module/Database';
import { BadRequestError } from 'routing-controllers';

describe('ShortUrlService', () => {
  beforeAll(() => createDBPool());
  afterAll(() => release());
  const shortUrlCommendRepository = new ShortUrlCommendRepository();
  const shortUrlQueryRepository = new ShortUrlQueryRepository();
  const shortUrlService = new ShortUrlService(shortUrlCommendRepository, shortUrlQueryRepository);

  describe('convertShortUrl', () => {
    afterEach(async () => {
      jest.clearAllMocks();
    });
    test('성공: url 단축 성공', async () => {
      await shortUrlService.convertShortUrl({ originalUrl: 'https://okky.kr/community/life' });
    });
  });

  describe('getOriginalUrl', () => {
    afterEach(async () => {
      jest.clearAllMocks();
    });

    test('성공: 원본 url 조회 성공', async () => {
      const result = await shortUrlService.getOriginalUrl('rvAGWsc');
      expect(result.originalUrl).toBe('naver.com');
    });
    test('예외: 존재하지 않는 shortUrl', async () => {
      await expect(async () => {
        await shortUrlService.getOriginalUrl('rvAGWscee');
      }).rejects.toThrowError(new BadRequestError('존재하지 않는 단축 url.'));
    });
  });
});
