'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const crypto_1 = __importDefault(require("crypto"));
const Utils_1 = require("./Support/Utils");
const AES_1 = require("./Support/AES");
const PKCS_1 = __importDefault(require("./Support/PKCS"));
class Encryptor {
    constructor(appId = null, token = null, aesKey = null, receiveId = null) {
        this.appId = appId;
        this.token = token;
        this.aesKey = aesKey;
        this.receiveId = receiveId;
        this.blockSize = 32;
        if (typeof this.aesKey === 'string') {
            this.aesKey = Buffer.from(this.aesKey + '=', 'base64');
        }
    }
    /**
     * 获取配置的token
     * @returns
     */
    getToken() {
        return this.token;
    }
    /**
     * 计算消息签名
     * @param args
     * @returns
     */
    createSignature(...args) {
        args.sort();
        return (0, Utils_1.createHash)(args.join(''), 'sha1');
    }
    /**
     * 加密
     * @param text
     * @param nonce
     * @param timestamp
     * @returns
     */
    encrypt(text, nonce = null, timestamp = null) {
        let encrypted = '';
        try {
            // 算法：AES_Encrypt(随机16B + msg_len(4) + msg + appID)
            let randomString = crypto_1.default.pseudoRandomBytes(16);
            let msg = Buffer.from(text);
            let msgLength = Buffer.alloc(4);
            msgLength.writeUInt32BE(msg.length, 0);
            let encoded = PKCS_1.default.pad(Buffer.concat([randomString, msgLength, msg, Buffer.from(this.appId)]), this.blockSize);
            encrypted = AES_1.AES.encrypt(encoded, this.aesKey, this.aesKey.slice(0, 16), false, 'aes-256-cbc').toString('base64');
        }
        catch (e) {
            throw new Error('Fail to encrypt data');
        }
        if (!nonce)
            nonce = this.appId.slice(0, 10);
        if (!timestamp)
            timestamp = (0, Utils_1.getTimestamp)();
        let response = {
            Encrypt: encrypted,
            MsgSignature: this.createSignature(this.token, timestamp, nonce, encrypted),
            TimeStamp: timestamp,
            Nonce: nonce,
        };
        return (0, Utils_1.buildXml)(response);
    }
    /**
     * 解密
     * @param text
     * @param msgSignature
     * @param nonce
     * @param timestamp
     * @returns
     */
    decrypt(text, msgSignature, nonce, timestamp) {
        let signature = this.createSignature(this.token, nonce, timestamp, text);
        if (signature !== msgSignature) {
            throw new Error('Invalid Signature.');
        }
        let deciphered = AES_1.AES.decrypt(Buffer.from(text, 'base64'), this.aesKey, this.aesKey.slice(0, 16), false, 'aes-256-cbc');
        deciphered = PKCS_1.default.unpad(deciphered, this.blockSize);
        let content = deciphered.slice(16);
        let length = content.slice(0, 4).readUInt32BE(0);
        if (this.receiveId && content.slice(length + 4).toString() !== this.receiveId) {
            throw new Error('Invalid appId.');
        }
        return content.slice(4, length + 4).toString();
    }
}
;
module.exports = Encryptor;
