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
import { Service } from 'typedi';
import { Response } from 'express';
// utils
import { RESPONSE_CODE } from '../../../config/StatusCode';
// services
import { ShortUrlService } from '../application/ShortUrlService';
// requests, response
import { convertShortUrlRequest } from '../model/request/ShortUrlRequest';
@JsonController('/short-url')
@Service()
export class ShortUrlController {
  constructor(private shortUrlService: ShortUrlService) {}

  @HttpCode(RESPONSE_CODE.SUCCESS.CREATED)
  @Post('/')
  public async convertShortUrl(@Body() convertShortUrlRequest: convertShortUrlRequest, @Res() res: Response){
    return this.shortUrlService.convertShortUrl(convertShortUrlRequest);
  }
}