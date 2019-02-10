import * as express from 'express';
import * as bodyPArser from 'body-parser';
import * as cors from 'cors';
import { NextFunction, Request, Response } from 'express';
import * as path from 'path';
import { useExpressServer } from 'routing-controllers';

export class ExpressConfig {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(bodyPArser.json());
    this.app.use(this.clientErrorHandler);
    this.setupControllers();
  }

  public setupControllers() {
    const controllersPath = path.resolve('dist', 'controllers');
    useExpressServer(this.app, {
      routePrefix: 'api',
      controllers: [`${controllersPath}/*.js`],
      cors: true,
    });
  }

  public clientErrorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    res.status(error.status).send(error.message);
  }
}
