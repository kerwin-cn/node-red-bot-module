import AccountInterface from "./Contracts/AccountInterface";
declare class Account implements AccountInterface {
    protected corpId: string;
    protected providerSecret: string;
    protected suiteId: string;
    protected suiteSecret: string;
    protected token: string;
    protected aesKey: string;
    constructor(corpId: string, providerSecret: string, suiteId: string, suiteSecret: string, token?: string, aesKey?: string);
    getCorpId(): string;
    getProviderSecret(): string;
    getSuiteId(): string;
    getSuiteSecret(): string;
    getToken(): string;
    getAesKey(): string;
}
export = Account;
