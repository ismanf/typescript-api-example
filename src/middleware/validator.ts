import { ExpressMiddlewareInterface } from 'routing-controllers';

export class ValidatorMiddleware implements ExpressMiddlewareInterface {
  public use(request: any, response: any, next: (err?: any) => void) {
    response.status(400).json({ message: 'Payload should not be empty' });
  }
}
