import { ExpressMiddlewareInterface } from 'routing-controllers';
import logger from '../core/logger';

export class LoggerMiddleware implements ExpressMiddlewareInterface {
  public use(request: any, response: any, next: (err?: any) => void) {
    logger.info('We got a request: ', Date.now().toLocaleString());
    next();
  }
}
