declare abstract class VerifyTicketInterface {
    /**
     * 获取ticket缓存名
     * @returns
     */
    getKey(): string;
    /**
     * 设置ticket缓存名
     * @returns
     */
    setKey(key: string): this;
    /**
     * 设置ticket
     * @returns
     */
    setTicket(key: string): Promise<this>;
    /**
     * 获取ticket
     * @returns
     */
    getTicket(): Promise<string>;
}
export = VerifyTicketInterface;
