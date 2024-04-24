'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const merge_1 = __importDefault(require("merge"));
const ConfigInterface_1 = __importDefault(require("./Contracts/ConfigInterface"));
const Obj_1 = __importDefault(require("./Support/Obj"));
class Config extends ConfigInterface_1.default {
    constructor(items = {}) {
        super();
        this.items = items;
        this.requiredKeys = [];
        this.items = merge_1.default.recursive(true, items);
        this.checkMissingKeys();
    }
    /**
     * 检查是否有配置项缺失
     * @returns
     */
    checkMissingKeys() {
        if (!this.requiredKeys || this.requiredKeys.length == 0) {
            return true;
        }
        let missingKeys = this.requiredKeys.filter(key => {
            return !this.has(key);
        });
        if (missingKeys.length > 0) {
            throw new Error(`${missingKeys.join(',')} cannot be empty.`);
        }
        return true;
    }
    /**
     * 获取所有配置项
     * @returns
     */
    all() {
        return merge_1.default.recursive(true, this.items);
    }
    /**
     * 判断配置项是否存在
     * @param key
     * @returns
     */
    has(key) {
        return Obj_1.default.has(this.items, key);
    }
    /**
     * 设置配置项
     * @param key
     * @param value
     */
    set(key, value) {
        Obj_1.default.set(this.items, key, value);
    }
    /**
     * 获取配置项
     * @param key
     * @param defaultValue
     * @returns
     */
    get(key, defaultValue = null) {
        if (typeof key === 'string') {
            return Obj_1.default.get(this.items, key, defaultValue);
        }
        return this.getMany(key);
    }
    /**
     * 获取多个配置项
     * @param keys 键名列表 或者 {键名:默认值} 格式的对象
     * @returns
     */
    getMany(keys) {
        let config = {};
        if (!keys || typeof keys.map === undefined)
            return config;
        keys.map((key, val) => {
            if (typeof key === 'number') {
                config[key] = Obj_1.default.get(this.items, val, null);
            }
            else {
                config[key] = Obj_1.default.get(this.items, key, val);
            }
        });
        return config;
    }
    /**
     * 判断配置项是否存在
     * @param key
     * @returns
     */
    offsetExists(key) {
        return this.has('' + key);
    }
    /**
     * 获取配置项
     * @param key
     * @returns
     */
    offsetGet(key) {
        return this.get('' + key);
    }
    /**
     * 设置配置项
     * @param key
     * @param value
     */
    offsetSet(key, value) {
        this.set('' + key, value);
    }
    /**
     * 删除配置项
     * @param key
     */
    offsetUnset(key) {
        this.set('' + key, undefined);
    }
}
;
module.exports = Config;
