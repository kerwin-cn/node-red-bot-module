import CacheInterface from "../Core/Contracts/CacheInterface";
import HttpClientInterface from "../Core/HttpClient/Contracts/HttpClientInterface";
import RefreshableAccessTokenInterface from "../Core/Contracts/RefreshableAccessTokenInterface";
declare class AccessToken implements RefreshableAccessTokenInterface {
    protected corpId: string;
    protected secret: string;
    protected key: string;
    protected cache: CacheInterface;
    protected httpClient: HttpClientInterface;
    constructor(corpId: string, secret: string, key?: string, cache?: CacheInterface, httpClient?: HttpClientInterface);
    /**
     * 获取access_token的缓存名称
     * @returns
     */
    getKey(): string;
    /**
     * 设置access_token的缓存名称
     * @param key
     * @returns
     */
    setKey(key: string): this;
    getToken(): Promise<string>;
    toQuery(): Promise<Record<string, any>>;
    refresh(): Promise<string>;
}
export = AccessToken;
