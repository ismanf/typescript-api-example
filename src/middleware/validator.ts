import { Request, Response, NextFunction, Handler } from 'express';

export const validator: Handler =  (request: Request, response: Response, next: NextFunction) => {
  console.log(request.body);
  if (['POST', 'PUT'].indexOf(request.method) !== -1 && request.headers['content-length'] === '0') {
    response.status(400).json({ message: 'Payload should not be empty' });
    return;
  }
  next();
};
