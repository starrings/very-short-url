import request from 'supertest';
import { TestApp } from '../../../utils/TestApp';
import { createDBPool, release } from '../../../../src/common/module/Database';
import { DeleteShortUrlTestData } from '../utils/DeleteShoerUrlTestData';
import { convertShortUrlRequest } from '../../../../src/business/short-url/model/request/ShortUrlRequest';

const app = new TestApp().app;

beforeAll(() => createDBPool());
afterAll(() => release());

describe('ShortUrlController', () => {
  const deleteShortUrlTestData = new DeleteShortUrlTestData();

  afterEach(() => jest.clearAllMocks());

  describe('[post] /api/short-url', () => {
    afterAll(async () => {
      await deleteShortUrlTestData.deleteShortUrl();
    });

    test('201 url 단축 성공!', async () => {
      const requestBody: convertShortUrlRequest = {
        originalUrl: 'https://okky.kr/community/life',
      };

      await request(app).post('/api/short-url').send(requestBody).expect(201);
    });
  });

  describe('[get] /api/short-url/original-url/:shortUrl', () => {
    afterAll(async () => {
      await deleteShortUrlTestData.deleteShortUrl();
    });

    test('200 원본 url 조회 성공', async () => {
      await request(app).get('/api/short-url/original-url/2uJRajK').expect(200);
    });
  });
});
