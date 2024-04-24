declare abstract class AccessTokenInterface {
    /**
     * 获取token
     * @returns
     */
    getToken(): Promise<string>;
    /**
     * 转成url参数
     * @returns
     */
    toQuery(): Promise<Record<string, any>>;
}
export = AccessTokenInterface;
