'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const AccessToken_1 = __importDefault(require("../OfficialAccount/AccessToken"));
class AccessToken extends AccessToken_1.default {
    constructor() {
        super(...arguments);
        /**
         * 缓存前缀
         */
        this.CACHE_KEY_PREFIX = 'mini_app';
    }
}
module.exports = AccessToken;
