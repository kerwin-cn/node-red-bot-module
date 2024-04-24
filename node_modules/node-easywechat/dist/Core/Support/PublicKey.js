"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicKey = void 0;
const fs_1 = __importDefault(require("fs"));
const crypto_1 = require("crypto");
class PublicKey {
    constructor(certificate, serialNo = '') {
        if (serialNo) {
            if (!certificate) {
                throw new Error('Invalid PublicKey content');
            }
            this.certificate = Buffer.from(certificate);
            this.serialNo = serialNo;
        }
        else if (fs_1.default.existsSync(certificate)) {
            this.certificate = fs_1.default.readFileSync(certificate) || Buffer.from('');
        }
        else {
            throw new Error('Fail to read PublicKey file');
        }
    }
    /**
     * 获取公钥的序列号
     * @returns
     */
    getSerialNo() {
        if (!this.serialNo) {
            try {
                this.serialNo = new crypto_1.X509Certificate(this.certificate).serialNumber;
            }
            catch (e) {
                throw new Error('Read the $certificate failed, please check it whether or nor correct');
            }
        }
        return this.serialNo;
    }
    /**
     * 获取证书内容
     * @returns
     */
    getValue() {
        return this.certificate;
    }
    /**
     * 转为字符串
     * @returns
     */
    toString() {
        return this.certificate.toString();
    }
    /**
     * 通过内容创建实例
     * @param content 证书内容
     * @param serialNo 证书序列号
     */
    static createByCertificateContent(content, serialNo) {
        return new PublicKey(content, serialNo);
    }
}
exports.PublicKey = PublicKey;
