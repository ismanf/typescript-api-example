"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyPArser = require("body-parser");
const path = require("path");
const routing_controllers_1 = require("routing-controllers");
class ExpressConfig {
    constructor() {
        this.app = express();
        this.app.use(bodyPArser.json());
        this.app.use(this.clientErrorHandler);
        this.setupControllers();
    }
    setupControllers() {
        const controllersPath = path.resolve('dist', 'controllers');
        routing_controllers_1.useExpressServer(this.app, {
            routePrefix: 'api',
            controllers: [`${controllersPath}/*.js`],
            cors: true
        });
    }
    clientErrorHandler(error, req, res, next) {
        res.status(error.status).send(error.message);
    }
}
exports.ExpressConfig = ExpressConfig;
//# sourceMappingURL=Express.js.map