'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const RSA_1 = __importDefault(require("../Core/Support/RSA"));
const crypto_1 = __importDefault(require("crypto"));
/**
 * 敏感信息加解密
 * @see https://pay.weixin.qq.com/docs/merchant/development/interface-rules/sensitive-data-encryption.html
 */
class Encryptor extends RSA_1.default {
    /**
     * 设置加密机所需的公私密钥
     * @param publicCert PublicKey封装的公钥
     * @param privateCert PrivateKey封装的私钥
     */
    setCerts(publicCert, privateCert) {
        this.publicCert = publicCert;
        this.privateCert = privateCert;
        this.setPublicKey(publicCert.toString());
        this.setPrivateKey(privateCert.toString());
    }
    /**
     * 获取公钥的序列号
     */
    getSerialNo() {
        return this.publicCert.getSerialNo();
    }
    /**
     * 加密
     * @param plaintext 待加密文本
     * @param encoding 编码，默认：'base64'
     * @param hashType 哈希方式，默认：'sha1'
     * @param padding 补位方式，默认：crypto.constants.RSA_PKCS1_OAEP_PADDING
     * @returns
     */
    encrypt(plaintext, encoding = 'base64', hashType = 'sha1', padding = crypto_1.default.constants.RSA_PKCS1_OAEP_PADDING) {
        return super.encrypt(plaintext, encoding, hashType, padding);
    }
    /**
     * 解密
     * @param ciphertext 待解密文本
     * @param encoding 编码，默认：'base64'
     * @param hashType 哈希方式，默认：'sha1'
     * @param padding 补位方式，默认：crypto.constants.RSA_PKCS1_OAEP_PADDING
     * @returns
     */
    decrypt(ciphertext, encoding = 'base64', hashType = 'sha1', padding = crypto_1.default.constants.RSA_PKCS1_OAEP_PADDING) {
        return super.decrypt(ciphertext, encoding, hashType, padding);
    }
}
module.exports = Encryptor;
