'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const HttpClientInterface_1 = __importDefault(require("./HttpClientInterface"));
class AccessTokenAwareHttpClientInterface extends HttpClientInterface_1.default {
    /**
     * 设置AccessToken实例
     */
    withAccessToken(accessToken) { return this; }
}
;
module.exports = AccessTokenAwareHttpClientInterface;
