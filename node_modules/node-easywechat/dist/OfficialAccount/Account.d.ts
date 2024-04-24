import AccountInterface from "./Contracts/AccountInterface";
declare class Account implements AccountInterface {
    protected appId: string;
    protected secret: string;
    protected token: string;
    protected aesKey: string;
    constructor(appId: string, secret: string, token?: string, aesKey?: string);
    getAppId(): string;
    getSecret(): string;
    getToken(): string;
    getAesKey(): string;
}
export = Account;
