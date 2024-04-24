"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateKey = void 0;
const fs_1 = __importDefault(require("fs"));
class PrivateKey {
    constructor(key, passphrase) {
        this.passphrase = passphrase;
        if (fs_1.default.existsSync(key)) {
            this.key = fs_1.default.readFileSync(key) || Buffer.from('');
        }
        else {
            throw new Error('Fail to read PrivateKey file');
        }
    }
    /**
     * 获取私钥内容
     * @returns
     */
    getKey() {
        return this.key;
    }
    /**
     * 获取密码
     * @returns
     */
    getPassphrase() {
        return this.passphrase;
    }
    /**
     * 转为字符串
     * @returns
     */
    toString() {
        return this.getKey();
    }
}
exports.PrivateKey = PrivateKey;
