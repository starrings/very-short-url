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
  public async convertShortUrl(@Body() convertShortUrlRequest: convertShortUrlRequest) {
    return new ResponseBody(
      RESPONSE_STATUS.SUCCESS.CREATED,
      'url 단축 성공!',
      await this.shortUrlService.convertShortUrl(convertShortUrlRequest),
    );
  }

  @HttpCode(RESPONSE_CODE.SUCCESS.OK)
  @Get('/original-url/:shortUrl')
  @OpenAPI({
    summary: '단축 url로 원본 url 조회',
    statusCode: RESPONSE_CODE.SUCCESS.OK,
    description: SHORT_URL_DESCRIPTION['[get] /original-url/:shortUrl'],
    responses: SHORT_URL_RESPONSES['[get] /original-url/:shortUrl'],
  })
  @ResponseSchema(ResponseBody)
  public async getOriginalUrl(@Param('shortUrl') shortUrl: string) {
    return new ResponseBody(
      RESPONSE_STATUS.SUCCESS.OK,
      '원본 url 조회 성공',
      await this.shortUrlService.getOriginalUrl(shortUrl),
    )
  } 
}