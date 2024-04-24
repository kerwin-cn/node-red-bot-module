import CacheInterface from "../Core/Contracts/CacheInterface";
import HttpClientInterface from "../Core/HttpClient/Contracts/HttpClientInterface";
import RefreshableAccessTokenInterface from "../Core/Contracts/RefreshableAccessTokenInterface";
declare class AccessToken implements RefreshableAccessTokenInterface {
    protected appId: string;
    protected secret: string;
    protected key: string;
    protected cache: CacheInterface;
    protected httpClient: HttpClientInterface;
    protected stable: boolean;
    /**
     * 缓存前缀
     */
    protected CACHE_KEY_PREFIX: string;
    constructor(appId: string, secret: string, key?: string, cache?: CacheInterface, httpClient?: HttpClientInterface, stable?: boolean);
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
    /**
     * 获取稳定版接口调用凭据
     * @param forceRefresh 是否强制刷新，默认：false
     */
    getStableAccessToken(forceRefresh?: boolean): Promise<string>;
    /**
     * 获取接口调用凭据
     */
    getAccessToken(): Promise<string>;
}
export = AccessToken;
