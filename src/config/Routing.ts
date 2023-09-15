import { APP_CONFIG } from './Env';
import { ShortUrlController } from '../business/short-url/api/ShortUrlController';
import { CustomErrorHandler } from '../common/middleware/ErrorHandler';

export const routingControllerOptions = {
  cors: true,
  defaultErrorHandler: false,
  routePrefix: APP_CONFIG.API_PREFIX,
  controllers: [ShortUrlController],
  middlewares: [CustomErrorHandler],
};
