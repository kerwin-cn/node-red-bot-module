'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Utils_1 = require("../Core/Support/Utils");
const merge_1 = __importDefault(require("merge"));
const RSA_1 = __importDefault(require("../Core/Support/RSA"));
class Signature {
    constructor(merchant) {
        this.merchant = merchant;
    }
    /**
     * V3版本的签名计算
     * @param method 请求方式
     * @param url 请求地址
     * @param payload 请求载荷
     * @param nonce 随机串，默认：随机生成
     * @param timestamp 时间戳，默认：当前时间
     * @returns
     */
    createHeader(method, url, payload, nonce = null, timestamp = null) {
        let pathname = url;
        if (url.startsWith('https://') || url.startsWith('http://')) {
            let urlObj = new URL(url);
            let search = (0, Utils_1.buildQueryString)((0, merge_1.default)(true, urlObj.searchParams, payload.params));
            pathname = urlObj.pathname + (search ? '?' + search : '');
        }
        else {
            let search = '';
            if (payload.params) {
                if (typeof payload.params === 'string') {
                    search = payload.params.replace(/^\?|&/, '');
                }
                else if (Object.keys(payload.params).length > 0) {
                    search = (0, Utils_1.buildQueryString)(payload.params);
                }
            }
            if (search) {
                pathname += (pathname.indexOf('?') > -1 ? '&' : '?') + search;
            }
        }
        if (!nonce)
            nonce = (0, Utils_1.randomString)();
        if (!timestamp)
            timestamp = (0, Utils_1.getTimestamp)();
        let body = '';
        if (payload.data) {
            if (typeof payload.data === 'object') {
                body = JSON.stringify(payload.data);
            }
            else {
                body = payload.data;
            }
        }
        let signString = `${method.toUpperCase()}\n${pathname}\n${timestamp}\n${nonce}\n${body}\n`;
        let rsa = new RSA_1.default;
        rsa.setPublicKey(this.merchant.getCertificate().toString());
        rsa.setPrivateKey(this.merchant.getPrivateKey().toString());
        let sign = rsa.sign(signString);
        return `WECHATPAY2-SHA256-RSA2048 mchid="${this.merchant.getMerchantId()}",nonce_str="${nonce}",timestamp="${timestamp}",serial_no="${this.merchant.getCertificate().getSerialNo()}",signature="${sign}"`;
    }
}
module.exports = Signature;
