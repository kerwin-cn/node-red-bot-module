'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const HttpClient_1 = __importDefault(require("../HttpClient/HttpClient"));
class HttpClientMixin {
    constructor() {
        this.httpClient = null;
    }
    /**
     * 获取请求客户端实例
     * @returns
     */
    getHttpClient() {
        if (!this.httpClient) {
            if (typeof this['createHttpClient'] === 'function') {
                this.httpClient = this['createHttpClient']();
            }
            else {
                this.httpClient = this.createDefaultHttpClient();
            }
        }
        return this.httpClient;
    }
    /**
     * 设置请求客户端实例
     * @param httpClient
     * @returns
     */
    setHttpClient(httpClient) {
        this.httpClient = httpClient;
        return this;
    }
    /**
     * 创建默认请求客户端实例
     * @returns
     */
    createDefaultHttpClient() {
        return HttpClient_1.default.create(this.getHttpClientDefaultOptions());
    }
    /**
     * 获取请求默认配置
     * @returns
     */
    getHttpClientDefaultOptions() {
        return {};
    }
}
;
module.exports = HttpClientMixin;
