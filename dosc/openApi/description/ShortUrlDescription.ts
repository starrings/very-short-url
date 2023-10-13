export const SHORT_URL_DESCRIPTION = {
  '[post] /': `
  ## Request Body
  - orignalUrl: 원본 url

  ## Response Body
  - shortUrl: 단축 url
  `,
  '[get] /original-url/:shortUrl': `
  ## Request Body
  - shortUrl: 단축 url

  ## Response Body
  - originalUrl: 원본 url
  `,
};
