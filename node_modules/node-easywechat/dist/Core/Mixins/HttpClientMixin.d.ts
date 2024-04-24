import HttpClientInterface from '../HttpClient/Contracts/HttpClientInterface';
declare class HttpClientMixin {
    protected httpClient: HttpClientInterface;
    /**
     * 获取请求客户端实例
     * @returns
     */
    getHttpClient(): HttpClientInterface;
    /**
     * 设置请求客户端实例
     * @param httpClient
     * @returns
     */
    setHttpClient(httpClient: HttpClientInterface): this;
    /**
     * 创建默认请求客户端实例
     * @returns
     */
    protected createDefaultHttpClient(): HttpClientInterface;
    /**
     * 获取请求默认配置
     * @returns
     */
    protected getHttpClientDefaultOptions(): Record<string, any>;
}
export = HttpClientMixin;
