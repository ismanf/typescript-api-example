"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express_1 = require("./middleware/Express");
const http_1 = require("http");
class BookApplication {
    constructor() {
        this.middleware = new Express_1.ExpressConfig();
        this.server = http_1.createServer(this.middleware.app);
    }
    run() {
        this.server.listen(3000, () => {
            console.log('App started on port: 3000');
        });
    }
}
exports.BookApplication = BookApplication;
//# sourceMappingURL=App.js.map