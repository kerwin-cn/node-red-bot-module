import CacheInterface from "../Core/Contracts/CacheInterface";
import HttpClientInterface from "../Core/HttpClient/Contracts/HttpClientInterface";
import RefreshableAccessTokenInterface from "../Core/Contracts/RefreshableAccessTokenInterface";
import VerifyTicketInterface from "./Contracts/VerifyTicketInterface";
declare class ComponentAccessToken implements RefreshableAccessTokenInterface {
    protected appId: string;
    protected secret: string;
    protected verifyTicket: VerifyTicketInterface;
    protected key: string;
    protected cache: CacheInterface;
    protected httpClient: HttpClientInterface;
    constructor(appId: string, secret: string, verifyTicket: VerifyTicketInterface, key?: string, cache?: CacheInterface, httpClient?: HttpClientInterface);
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
export = ComponentAccessToken;
