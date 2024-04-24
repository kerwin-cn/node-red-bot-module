declare abstract class AccountInterface {
    /**
     * 获取appid
     * @returns
     */
    getAppId(): string;
    /**
     * 获取secret
     * @returns
     */
    getSecret(): string;
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
