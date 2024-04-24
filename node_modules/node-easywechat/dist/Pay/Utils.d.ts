import { PublicKey } from '../Core/Support/PublicKey';
import { PayAppConfig, PayBridgeConfig, PaySdkConfig } from '../Types/global';
import MerchantInterface from './Contracts/MerchantInterface';
import Encryptor from './Encryptor';
declare class Utils {
    protected merchant: MerchantInterface;
    constructor(merchant: MerchantInterface);
    /**
     * 获取加密所用的平台证书
     * @returns
     */
    getPlatformCert(): Promise<PublicKey>;
    /**
     * 获取敏感信息加密机
     * @see https://pay.weixin.qq.com/docs/merchant/development/interface-rules/sensitive-data-encryption.html
     * @param platformCert PublicKey封装过的平台证书
     * @returns
     */
    getEncryptor(platformCert?: PublicKey): Promise<Encryptor>;
    /**
     * 创建签名（V3），并返回签名字符串
     * @param params 参数集合
     * @returns
     */
    createSignature(message: string): string;
    /**
     * 创建签名（V2），并返回签名字符串
     * @param params 参数集合
     * @returns
     */
    createV2Signature(params: Record<string, string | number>): string;
    /**
     * 构建JSBridge支付参数
     * @see [v3文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter4_1_4.shtml)
     * @see [v2文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6)
     * @param prepayId 下单接口返回的prepay_id
     * @param appId 应用id
     * @param signType v3仅支持RSA，V2支持MD5、HMAC-SHA256
     * @returns
     */
    buildBridgeConfig(prepayId: string, appId: string, signType?: 'RSA' | 'MD5' | 'HMAC-SHA256'): PayBridgeConfig;
    /**
     * 构建JS-SDK支付参数
     * @see https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#58
     * @param prepayId 下单接口返回的prepay_id
     * @param appId 应用id
     * @param signType v3仅支持RSA，V2支持MD5、HMAC-SHA256
     */
    buildSdkConfig(prepayId: string, appId: string, signType?: 'RSA' | 'MD5' | 'HMAC-SHA256'): PaySdkConfig;
    /**
     * 构建小程序支付参数
     * @see https://developers.weixin.qq.com/miniprogram/dev/api/payment/wx.requestPayment.html
     * @param prepayId 下单接口返回的prepay_id
     * @param appId 应用id
     * @param signType v3仅支持RSA，V2支持MD5、HMAC-SHA256
     * @returns
     */
    buildMiniAppConfig(prepayId: string, appId: string, signType?: 'RSA' | 'MD5' | 'HMAC-SHA256'): PayBridgeConfig;
    /**
     * 构建App支付参数
     * @see https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter4_2_4.shtml
     * @param prepayId 下单接口返回的prepay_id
     * @param appId 应用id
     * @returns
     */
    buildAppConfig(prepayId: string, appId: string): PayAppConfig;
}
export = Utils;
