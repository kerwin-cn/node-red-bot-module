import AccessTokenInterface from "../Core/Contracts/AccessTokenInterface";
declare class AuthorizerAccessToken implements AccessTokenInterface {
    protected appId: string;
    protected accessToken: string;
    constructor(appId: string, accessToken: string);
    /**
     * 获取appId
     * @returns
     */
    getAppId(): string;
    getToken(): Promise<string>;
    toQuery(): Promise<Record<string, any>>;
    /**
     * 转为字符串
     * @returns
     */
    toString(): string;
}
export = AuthorizerAccessToken;
