import AccessTokenAwareClient from "../HttpClient/AccessTokenAwareClient";
declare abstract class ClientMixin {
    protected client: AccessTokenAwareClient;
    /**
     * 创建客户端实例
     * @returns
     */
    abstract createClient(): AccessTokenAwareClient;
    /**
     * 获取客户端实例
     * @returns
     */
    getClient(): AccessTokenAwareClient;
    /**
     * 设置客户端实例
     * @param client
     * @returns
     */
    setClient(client: AccessTokenAwareClient): this;
}
export = ClientMixin;
