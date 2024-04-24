'use strict';
class ApplicationInterface {
    /**
     * 获取当前账户实例
     * @returns
     */
    getMerchant() { return null; }
    /**
     * 获取服务端实例
     * @returns
     */
    getServer() { return null; }
    /**
     * 获取当前请求实例
     * @returns
     */
    getRequest() { return null; }
    /**
     * 获取客户端实例
     * @returns
     */
    getClient() { return null; }
    /**
     * 获取网络请求客户端实例
     * @returns
     */
    getHttpClient() { return null; }
    /**
     * 获取配置信息实例
     * @returns
     */
    getConfig() { return null; }
    /**
     * 获取缓存实例
     * @returns
     */
    getCache() { return null; }
    /**
     * 获取工具实例
     * @returns
     */
    getUtils() { return null; }
    /**
     * 获取验证器实例
     * @returns
     */
    getValidator() { return null; }
}
;
module.exports = ApplicationInterface;
