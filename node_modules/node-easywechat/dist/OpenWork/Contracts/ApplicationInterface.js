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
     * 获取授权应用的加密机实例
     * @returns
     */
    getSuiteEncryptor() { return null; }
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
     * 获取企业的客户端实例
     * @returns
     */
    getAuthorizerClient(corpId, permanentCode, suiteAccessToken = null) { return null; }
    /**
     * 获取jsapi ticket
     * @returns
     */
    getJsApiTicket(corpId, permanentCode, suiteAccessToken = null) { return null; }
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
     * 获取开放平台应用的AccessToken实例
     * @returns
     */
    getProviderAccessToken() { return null; }
    /**
     * 获取授权应用的AccessToken实例
     * @returns
     */
    getSuiteAccessToken() { return null; }
    /**
     * 获取授权应用的Ticket实例
     * @returns
     */
    getSuiteTicket() { return null; }
    /**
     * 获取缓存实例
     * @returns
     */
    getCache() { return null; }
    /**
     * 获取授权应用的OAuth实例
     * @param suiteId
     * @param suiteAccessToken
     * @https://developer.work.weixin.qq.com/document/path/91120#构造第三方应用oauth2链接
     * @returns
     */
    getOAuth(suiteId, suiteAccessToken = null) { return null; }
    /**
     * 获取企业的OAuth实例
     * @param corpId
     * @param suiteAccessToken
     * @see https://developer.work.weixin.qq.com/document/path/91120#构造企业oauth2链接
     * @returns
     */
    getCorpOAuth(corpId, suiteAccessToken = null) { return null; }
}
;
module.exports = ApplicationInterface;
