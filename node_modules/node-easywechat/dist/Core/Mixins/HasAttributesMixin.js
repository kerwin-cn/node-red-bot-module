'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const merge_1 = __importDefault(require("merge"));
class HasAttributesMixin {
    constructor() {
        /**
         * 属性对象
         */
        this.attributes = {};
    }
    /**
     * 返回对象格式
     * @returns
     */
    toObject() {
        return this.attributes;
    }
    /**
     * 返回json字符串
     * @returns
     */
    toJson() {
        return JSON.stringify(this.attributes);
    }
    /**
     * 判断键是否存在
     * @param key
     * @returns
     */
    has(key) {
        return this.attributes[key] !== undefined;
    }
    /**
     * 合并属性对象
     * @param attributes 新属性对象
     * @returns
     */
    merge(attributes) {
        this.attributes = merge_1.default.recursive(true, this.attributes, attributes);
        return this;
    }
    /**
     * 设置单个属性值
     * @param key
     * @param value
     */
    set(key, value) {
        this.attributes[key] = value;
    }
    /**
     * 获取单个属性值
     * @param key
     * @returns
     */
    get(key) {
        return this.attributes[key] || null;
    }
    offsetExists(key) {
        return this.attributes[key] !== undefined;
    }
    offsetGet(key) {
        return this.attributes[key];
    }
    offsetSet(key, value) {
        this.attributes[key] = value;
    }
    offsetUnset(key) {
        this.attributes[key] = undefined;
        delete this.attributes[key];
    }
}
;
module.exports = HasAttributesMixin;
