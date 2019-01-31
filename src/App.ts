import { Application } from 'express';
import { ExpressConfig } from './middleware/Express';
import { Server, createServer } from 'http';

export class BookApplication {
  server: Server;
  middleware: ExpressConfig;

  constructor() {
    this.middleware = new ExpressConfig();
    this.server = createServer(this.middleware.app);
  }

  run() {
    this.server.listen(3000, () => {
      console.log('App started on port: 3000');
    });
  }
}
