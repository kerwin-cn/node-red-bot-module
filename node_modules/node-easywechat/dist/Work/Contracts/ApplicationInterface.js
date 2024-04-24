'use strict';
class ApplicationInterface {
    /**
     * 获取当前账户实例
     * @returns
     */
    getAccount() { return null; }
    /**
     * 获取加密机实例
     * @returns
     */
    getEncryptor() { return null; }
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
     * 创建客户端实例
     * @returns
     */
    createClient() { return null; }
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
     * 获取AccessToken实例
     * @returns
     */
    getAccessToken() { return null; }
    /**
     * 获取缓存实例
     * @returns
     */
    getCache() { return null; }
    /**
     * 获取OAuth实例
     * @returns
     */
    getOAuth() { return null; }
    /**
     * 获取JsApiTicket实例
     * @returns
     */
    getTicket() { return null; }
    /**
     * 获取工具实例
     * @returns
     */
    getUtils() { return null; }
    /**
     * 设置OAuth工厂方法
     * @param oauthFactory
     * @returns
     */
    setOAuthFactory(oauthFactory) { return this; }
}
;
module.exports = ApplicationInterface;
