'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const ObjectAccessInterface_1 = __importDefault(require("./ObjectAccessInterface"));
class ConfigInterface extends ObjectAccessInterface_1.default {
    /**
     * 获取全部配置项
     * @returns
     */
    all() { return null; }
    /**
     * 判断配置项是否存在
     * @param key 键名
     * @returns
     */
    has(key) { return false; }
    /**
     * 设置配置项
     * @param key 键名
     * @param value 键值
     * @returns
     */
    set(key, value) { }
    /**
     * 获取配置项
     * @param key 键名
     * @param defaultValue 配置项不存在时返回的默认值
     * @returns
     */
    get(key, defaultValue = null) { return null; }
}
;
module.exports = ConfigInterface;
