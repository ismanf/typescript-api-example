"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidatorMiddleware {
    use(request, response, next) {
        response.status(400).json({ message: 'Payload should not be empty' });
    }
}
exports.ValidatorMiddleware = ValidatorMiddleware;
//# sourceMappingURL=validator.js.map