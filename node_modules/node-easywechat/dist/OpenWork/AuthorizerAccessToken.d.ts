import AccessTokenInterface from "../Core/Contracts/AccessTokenInterface";
import CacheInterface from "../Core/Contracts/CacheInterface";
import RefreshableAccessTokenInterface from "../Core/Contracts/RefreshableAccessTokenInterface";
import HttpClientInterface from "../Core/HttpClient/Contracts/HttpClientInterface";
declare class AuthorizerAccessToken implements RefreshableAccessTokenInterface {
    protected corpId: string;
    protected permanentCodeOrAccessToken: string;
    protected suiteAccessToken: AccessTokenInterface;
    protected key: string;
    protected cache: CacheInterface;
    protected httpClient: HttpClientInterface;
    constructor(corpId: string, permanentCodeOrAccessToken: string, suiteAccessToken?: AccessTokenInterface, key?: string, cache?: CacheInterface, httpClient?: HttpClientInterface);
    /**
     * 获取appId
     * @returns
     */
    getCorpId(): string;
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
     * 转为字符串
     * @returns
     */
    toString(): Promise<string>;
}
export = AuthorizerAccessToken;
