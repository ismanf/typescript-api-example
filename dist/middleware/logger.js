"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../core/logger");
class LoggerMiddleware {
    use(request, response, next) {
        logger_1.default.info('We got a request: ', Date.now().toLocaleString());
        next();
    }
}
exports.LoggerMiddleware = LoggerMiddleware;
//# sourceMappingURL=logger.js.map