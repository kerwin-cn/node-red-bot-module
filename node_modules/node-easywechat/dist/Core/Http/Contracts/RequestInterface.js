'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const MessageInterface_1 = __importDefault(require("./MessageInterface"));
class RequestInterface extends MessageInterface_1.default {
    /**
     * 获取请求路径，默认返回：'/'
     * @returns
     */
    getRequestTarget() { return null; }
    /**
     * 设置请求路径
     * @param requestTarget
     * @returns
     */
    withRequestTarget(requestTarget) { return this; }
    /**
     * 获取请求方式
     * @returns
     */
    getMethod() { return null; }
    /**
     * 设置请求方式
     * @param method
     * @returns
     */
    withMethod(method) { return this; }
    /**
     * 获取请求地址
     * @returns
     */
    getUri() { return null; }
    /**
     * 设置请求地址
     * @param uri
     * @returns
     */
    withUri(uri) { return this; }
}
;
module.exports = RequestInterface;
