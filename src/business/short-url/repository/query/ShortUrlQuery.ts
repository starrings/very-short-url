export const shortUrlQuery = {
  selectOriginalUrlByShortUrl: `
    SELECT 
      ust.original_url AS originalUrl 
    FROM 
      vsurl.url_shortener AS ust
    WHERE
      ust.short_url = ?
    ;
  `,
}