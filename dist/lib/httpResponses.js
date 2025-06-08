"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpResponse = httpResponse;
exports.wpApiHttpRespone = wpApiHttpRespone;
function httpResponse(status, message, data, res) {
    return res.status(status).json({
        message,
        data,
    });
}
function wpApiHttpRespone(status, data, res) {
    return res.status(status).json(data);
}
