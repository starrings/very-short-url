import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

import { RESPONSE_DESCRIPTION } from '../../../config/Description';
import { RESPONSE_STATUS } from '../../../config/Status';

import { ResponseBody } from '../../../common/response/Response';

export class ConvertShortUrlResponse extends ResponseBody<object> {
  constructor(shortUrl: string) {
    super(RESPONSE_STATUS.SUCCESS.CREATED, RESPONSE_DESCRIPTION.SUCCESS.CREATED, {
      message: "url 단축 성공!",
      shortUrl: shortUrl,
    });
  }
}