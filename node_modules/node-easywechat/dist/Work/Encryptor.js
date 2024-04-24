'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Encryptor_1 = __importDefault(require("../Core/Encryptor"));
class Encryptor extends Encryptor_1.default {
    constructor(corpId = null, token = null, aesKey = null) {
        super(corpId, token, aesKey, null);
        this.corpId = corpId;
        this.token = token;
        this.aesKey = aesKey;
        if (typeof this.aesKey === 'string') {
            this.aesKey = Buffer.from(this.aesKey + '=', 'base64');
        }
    }
}
module.exports = Encryptor;
