"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const superagent = require("superagent");
cucumber_1.When('the client creates a POST request to /books', function (cb) {
    this.request = superagent('POST', 'localhost:3000');
});
cucumber_1.When('attaches a generic empty payload', function () {
    return undefined;
});
cucumber_1.When('sends the request', function (cb) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            this.result = yield this.request;
        }
        catch (err) {
            this.error = err;
        }
        cb();
    });
});
cucumber_1.Then('our API should respond with a 400 HTTP status code', function (cb) {
    cb(null, 'pending');
});
cucumber_1.Then('the payload of the response should be a JSON object', function (cb) {
    cb(null, 'pending');
});
cucumber_1.Then('contains a message property which says "Payload should not be empty"', function (cb) {
    cb(null, 'pending');
});
//# sourceMappingURL=index.js.map