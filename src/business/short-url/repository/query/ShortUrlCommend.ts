export const shortUrlCommend = {
  insertShortUrl: `
    INSERT INTO
      vsurl.url_shortener (
        original_url,
        short_url
      )
    VALUES (
      ?,
      ?
    );
  `,
}