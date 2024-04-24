'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const RequestInterface_1 = __importDefault(require("./RequestInterface"));
class ServerRequestInterface extends RequestInterface_1.default {
    /**
     * 获取所有服务端参数
     * @returns
     */
    getServerParams() { return null; }
    /**
     * 获取所有cookie参数
     * @returns
     */
    getCookieParams() { return null; }
    /**
     * 设置cookie参数
     * @param cookies
     * @returns
     */
    withCookieParams(cookies) { return this; }
    /**
     * 获取所有get参数
     * @returns
     */
    getQueryParams() { return null; }
    /**
     * 设置get参数
     * @param query
     * @returns
     */
    withQueryParams(query) { return this; }
    /**
     * 获取所有上传文件
     * @returns
     */
    getUploadedFiles() { return null; }
    /**
     * 设置上传文件
     * @param files
     * @returns
     */
    withUploadedFiles(files) { return this; }
    /**
     * 获取所有post参数
     * @returns
     */
    getParsedBody() { return null; }
    /**
     * 设置post参数
     * @param data
     * @returns
     */
    withParsedBody(data) { return this; }
    /**
     * 获取所有属性
     * @returns
     */
    getAttributes() { return null; }
    /**
     * 获取单个属性
     * @param name
     * @param defaultValue
     * @returns
     */
    getAttribute(name, defaultValue = null) { return null; }
    /**
     * 设置属性值
     * @param name
     * @param value
     * @returns
     */
    withAttribute(name, value) { return this; }
    /**
     * 删除属性
     * @param name
     * @returns
     */
    withoutAttribute(name) { return this; }
}
;
module.exports = ServerRequestInterface;
