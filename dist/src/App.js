"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const logger_1 = require("./core/logger");
const Express_1 = require("./middleware/Express");
class BookApplication {
    constructor() {
        this.middleware = new Express_1.ExpressConfig();
        this.server = http.createServer(this.middleware.app);
    }
    run() {
        this.server.listen(3000, () => {
            logger_1.default.info('App listens on 3000');
        });
    }
}
exports.BookApplication = BookApplication;
//# sourceMappingURL=App.js.map