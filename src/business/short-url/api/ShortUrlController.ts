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

// utils
import { RESPONSE_CODE } from '../../../config/StatusCode';
// services
// requests, response
import { ShortUrlRequest } from '../model/request/ShortUrlRequest';

// @JsonController('/')
// @Service()
// export class ShortUrlController {
//   constructor(private shortUrlService: ShortUrlService) {}

//   @HttpCode(RESPONSE_CODE.SUCCESS.OK)
//   @Post('/short-url')
//   public async insertShortUrl(@Body() shortUrlRequest: ShortUrlRequest, @Res() res: Response){

//   }
// }