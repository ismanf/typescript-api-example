"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = (request, response, next) => {
    console.log(request.body);
    if (['POST', 'PUT'].indexOf(request.method) !== -1 && request.headers['content-length'] === '0') {
        response.status(400).json({ message: 'Payload should not be empty' });
        return;
    }
    next();
};
//# sourceMappingURL=validator.js.map