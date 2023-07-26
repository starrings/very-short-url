import { APP_CONFIG } from './Env';
import { UserController } from '../business/user/api/UserController';

export const routingControllerOptions = {
  cors: true,
  defaultErrorHandler: false,
  routePrefix: APP_CONFIG.API_PREFIX,
  controllers: [
    UserController,
  ],
  middlewares: [],
}