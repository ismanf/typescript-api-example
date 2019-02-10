import { Application } from 'express';
import * as http from 'http';
import logger from './core/logger';
import { ExpressConfig } from './middleware/Express';

export class BookApplication {
  private server: http.Server;
  private middleware: ExpressConfig;

  constructor() {
    this.middleware = new ExpressConfig();
    this.server = http.createServer(this.middleware.app);
  }

  public run() {
    this.server.listen(3000, () => {
      logger.info('App listens on 3000');
    });
  }
}
