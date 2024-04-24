'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const FileCache_1 = __importDefault(require("../Cache/FileCache"));
class CacheMixin {
    constructor() {
        this.cache = null;
        this.cacheLifetime = 1500;
        this.cacheNamespace = 'easywechat';
    }
    /**
     * 获取缓存过期时间，单位：秒
     * @returns
     */
    getCacheLifetime() {
        return this.cacheLifetime;
    }
    /**
     * 设置缓存过期时间，单位：秒
     * @param cacheLifetime
     * @returns
     */
    setCacheLifetime(cacheLifetime) {
        this.cacheLifetime = cacheLifetime;
    }
    /**
     * 获取缓存命名空间
     * @returns
     */
    getCacheNamespace() {
        return this.cacheNamespace;
    }
    /**
     * 设置缓存命名空间
     * @param cacheNamespace
     * @returns
     */
    setCacheNamespace(cacheNamespace) {
        this.cacheNamespace = cacheNamespace;
    }
    /**
     * 获取缓存实例
     * @returns
     */
    getCache() {
        if (!this.cache) {
            let options = null;
            if (typeof this['getConfig'] === 'function') {
                options = this['getConfig']()['get']('file_cache');
            }
            this.cache = new FileCache_1.default(options);
        }
        return this.cache;
    }
    /**
     * 设置缓存实例
     * @param cache
     * @returns
     */
    setCache(cache) {
        this.cache = cache;
        return this;
    }
}
;
module.exports = CacheMixin;
