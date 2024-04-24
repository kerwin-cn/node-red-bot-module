declare abstract class AccountInterface {
    /**
     * 获取corpid
     * @returns
     */
    getCorpId(): string;
    /**
     * 获取provider secret
     * @returns
     */
    getProviderSecret(): string;
    /**
     * 获取suite id
     * @returns
     */
    getSuiteId(): string;
    /**
     * 获取suite secret
     * @returns
     */
    getSuiteSecret(): string;
    /**
     * 获取token
     * @returns
     */
    getToken(): string;
    /**
     * 获取aesKey
     * @returns
     */
    getAesKey(): string;
}
export = AccountInterface;
