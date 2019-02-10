"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
exports.default = winston.createLogger({
    transports: [new winston.transports.Console()],
});
//# sourceMappingURL=index.js.map