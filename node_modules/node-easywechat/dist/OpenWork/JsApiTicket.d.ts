import CacheInterface from '../Core/Contracts/CacheInterface';
import HttpClientInterface from '../Core/HttpClient/Contracts/HttpClientInterface';
declare class JsApiTicket {
    protected corpId: string;
    protected key: string;
    protected cache: CacheInterface;
    protected httpClient: HttpClientInterface;
    constructor(corpId: string, key?: string, cache?: CacheInterface, httpClient?: HttpClientInterface);
    /**
     * 获取签名配置
     * @param url 完整URL地址
     * @param nonce 随机字符串，默认：随机10位
     * @param timestamp 时间长，默认：当前时间
     * @returns
     */
    createConfigSignature(url: string, nonce?: string, timestamp?: number, jsApiList?: string[], debug?: boolean, beta?: boolean): Promise<Record<string, any>>;
    protected getTicketSignature(ticket: string, nonce: string, timestamp: number, url: string): string;
    /**
     * 获取jsapi_ticket的缓存名称
     * @returns
     */
    getKey(): string;
    /**
     * 获取签名凭证jsapi_ticket
     * @returns
     */
    getTicket(): Promise<string>;
    /**
     * 获取代理应用的签名配置
     * @param agentId 代理应用的id
     * @param url 完整URL地址
     * @param nonce 随机字符串，默认：随机10位
     * @param timestamp 时间长，默认：当前时间
     * @returns
     */
    createAgentConfigSignature(agentId: number, url: string, nonce?: string, timestamp?: number, jsApiList?: string[]): Promise<Record<string, any>>;
    /**
     * 获取代理应用的签名凭证jsapi_ticket
     * @param agentId 代理应用的id
     * @returns
     */
    getAgentTicket(agentId: number): Promise<string>;
    /**
     * 获取代理应用的jsapi_ticket的缓存名称
     * @param agentId 代理应用的id
     * @returns
     */
    getAgentKey(agentId: number): string;
}
export = JsApiTicket;
