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

@JsonController('/user')
@Service()
export class UserController {


}