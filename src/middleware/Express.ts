import * as express from 'express';
import * as bodyPArser from 'body-parser';
import * as path from 'path';
import * as cors from 'cors';
import { Request, Response, NextFunction } from 'express';
import { useExpressServer } from 'routing-controllers';

export class ExpressConfig {
    app: express.Express;

    constructor() {
        this.app = express();
        this.app.use(bodyPArser.json());
        this.app.use(this.clientErrorHandler);
        this.setupControllers();
    }

    setupControllers() {
        const controllersPath = path.resolve('dist', 'controllers');
        useExpressServer(this.app, {
            routePrefix: 'api',
            controllers: [`${controllersPath}/*.js`],
            cors: true
        });
    }

    clientErrorHandler(error: any, req: Request, res: Response, next: NextFunction) {
        res.status(error.status).send(error.message);
    }
}