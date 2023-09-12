// third party
import {
  Get,
  Post,
  Patch,
  Body,
  HttpCode,
  JsonController,
  QueryParam,
  Req,
  Res,
  UseBefore,
  Delete,
  Param,
} from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { Response } from 'express';
// utils
import { RESPONSE_CODE } from '../../../config/StatusCode';
import { RESPONSE_STATUS } from '../../../config/Status';
import { SHORT_URL_DESCRIPTION } from '../../../../dosc/openApi/description/ShortUrlDescription';
import { SHORT_URL_RESPONSES } from '../../../../dosc/openApi/responses/ShortUrlResponses';
// services
import { ShortUrlService } from '../application/ShortUrlService';
// requests, response
import { convertShortUrlRequest } from '../model/request/ShortUrlRequest';
import { ResponseBody } from '../../../common/response/Response';
@JsonController('/short-url')
@Service()
export class ShortUrlController {
  constructor(private shortUrlService: ShortUrlService) {}

  @HttpCode(RESPONSE_CODE.SUCCESS.CREATED)
  @Post('/')
  @OpenAPI({
    summary: 'url 단축 및 저장 api',
    statusCode: RESPONSE_CODE.SUCCESS.CREATED,
    description: SHORT_URL_DESCRIPTION['[post] /'],
    responses: SHORT_URL_RESPONSES['[post] /'],
  })
  @ResponseSchema(ResponseBody)
  public async convertShortUrl(@Body() convertShortUrlRequest: convertShortUrlRequest, @Res() res: Response){
    return new ResponseBody(
      RESPONSE_STATUS.SUCCESS.CREATED,
      "url 단축 성공!",
      await this.shortUrlService.convertShortUrl(convertShortUrlRequest),
    );
  }
}