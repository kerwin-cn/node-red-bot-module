'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Encryptor_1 = __importDefault(require("../Core/Encryptor"));
class SuiteEncryptor extends Encryptor_1.default {
    constructor(suiteId = null, token = null, aesKey = null) {
        super(suiteId, token, aesKey, null);
        this.suiteId = suiteId;
        this.token = token;
        this.aesKey = aesKey;
        if (typeof this.aesKey === 'string') {
            this.aesKey = Buffer.from(this.aesKey + '=', 'base64');
        }
    }
}
module.exports = SuiteEncryptor;
