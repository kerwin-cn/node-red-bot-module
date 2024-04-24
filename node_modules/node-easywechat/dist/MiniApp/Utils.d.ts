import Application from './Application';
declare class Utils {
    protected app: Application;
    constructor(app: Application);
    /**
     * 登录凭证校验
     * @see https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html
     * @param code
     * @returns
     */
    codeToSession(code: string): Promise<Record<string, any>>;
    /**
     * 数据解密
     * @see https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#加密数据解密算法
     * @param sessionKey
     * @param iv
     * @param ciphertext
     * @returns
     */
    decryptSession(sessionKey: string, iv: string, ciphertext: string): Record<string, any>;
}
export = Utils;
