import AccessToken from './AccessToken';
declare class JsApiTicket extends AccessToken {
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
     * 获取签名配置
     * @param url 完整URL地址
     * @param nonce 随机字符串，默认：随机10位
     * @param timestamp 时间长，默认：当前时间
     * @returns
     */
    configSignature(url: string, nonce?: string, timestamp?: number): Promise<Record<string, any>>;
    protected getTicketSignature(ticket: string, nonce: string, timestamp: number, url: string): string;
}
export = JsApiTicket;
