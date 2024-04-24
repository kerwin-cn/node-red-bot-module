'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const MessageInterface_1 = __importDefault(require("./MessageInterface"));
class ResponseInterface extends MessageInterface_1.default {
    /**
     * 获取响应状态码
     * @returns
     */
    getStatusCode() { return null; }
    /**
     * 设置响应状态
     * @param code 状态码
     * @param reasonPhrase 状态码描述
     * @returns
     */
    withStatus(code, reasonPhrase = '') { return this; }
    /**
     * 获取状态码描述
     * @returns
     */
    getReasonPhrase() { return null; }
}
;
module.exports = ResponseInterface;
