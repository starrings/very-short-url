import { execute } from '../../../../src/common/module/Database';

export class DeleteShortUrlTestData {
  public async deleteShortUrl(): Promise<void> {
    try {
      await execute(
        `
          DELETE FROM
            vsurl.url_shortener
          WHERE
            original_url = "https://okky.kr/community/life"
          ;
        `,
        [],
      );
    } catch (err) {
      console.log(err);
    }
  }
}
