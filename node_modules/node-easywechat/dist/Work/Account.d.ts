import AccountInterface from "./Contracts/AccountInterface";
declare class Account implements AccountInterface {
    protected corpId: string;
    protected secret: string;
    protected token: string;
    protected aesKey: string;
    constructor(corpId: string, secret: string, token?: string, aesKey?: string);
    getCorpId(): string;
    getSecret(): string;
    getToken(): string;
    getAesKey(): string;
}
export = Account;
