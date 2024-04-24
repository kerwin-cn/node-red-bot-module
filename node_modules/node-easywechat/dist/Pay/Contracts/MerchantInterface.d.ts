import { PrivateKey } from "../../Core/Support/PrivateKey";
import { PublicKey } from "../../Core/Support/PublicKey";
declare abstract class MerchantInterface {
    /**
     * 获取merchant_id
     * @returns
     */
    getMerchantId(): string;
    /**
     * 获取证书私钥
     */
    getPrivateKey(): PrivateKey;
    /**
     * 获取secret_key
     * @returns
     */
    getSecretKey(): string;
    /**
     * 获取secret_key（V2版本）
     * @returns
     */
    getV2SecretKey(): string;
    /**
     * 获取证书
     * @returns
     */
    getCertificate(): PublicKey;
    /**
     * 获取平台证书缓存名称
     */
    getPlatformCertKey(): string;
    /**
     * 设置平台证书缓存名称
     * @param key
     */
    setPlatformCertKey(key: string): this;
    /**
     * 根据证书序列号获取平台证书
     * @param serial
     * @returns
     */
    getPlatformCert(serial: string): Promise<PublicKey>;
    /**
     * 获取所有平台证书
     * @returns
     */
    getPlatformCerts(): Promise<Record<string, PublicKey>>;
    /**
     * 从缓存或者接口获取平台证书
     * @param force 是否强制刷新缓存，默认：false
     */
    loadPlatformCerts(force?: boolean): Promise<Record<string, string>>;
    /**
     * 设置平台证书
     * @param certs 键名：序列号，键值：PublicKey实例或者文件内容字符串
     */
    setPlatformCerts(certs: Record<string, PublicKey | string>): void;
}
export = MerchantInterface;
