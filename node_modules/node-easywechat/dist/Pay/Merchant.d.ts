import { PrivateKey } from "../Core/Support/PrivateKey";
import { PublicKey } from "../Core/Support/PublicKey";
import Application from "./Application";
import MerchantInterface from "./Contracts/MerchantInterface";
declare class Merchant implements MerchantInterface {
    protected mchId: string;
    protected secretKey: string;
    protected v2SecretKey: string;
    protected app: Application;
    protected isConfigPlatformCerts: boolean;
    protected platformCerts: Record<string, PublicKey>;
    protected privateKey: PrivateKey;
    protected certificate: PublicKey;
    protected cacheKeyPlatformCert: string;
    constructor(mchId: string, privateKey: string | PrivateKey, certificate: string | PublicKey, secretKey: string, v2SecretKey: string, platformCerts?: Record<string, string | PublicKey> | string[] | PublicKey[], app?: Application);
    /**
     * 统一规范化平台证书
     * @param platformCerts 平台证书列表
     * @returns
     */
    protected normalizePlatformCerts(platformCerts: Record<string, string | PublicKey> | string[] | PublicKey[]): Record<string, PublicKey>;
    getMerchantId(): string;
    getPrivateKey(): PrivateKey;
    getSecretKey(): string;
    getV2SecretKey(): string;
    getCertificate(): PublicKey;
    getPlatformCert(serial: string): Promise<PublicKey>;
    getPlatformCerts(): Promise<Record<string, PublicKey>>;
    setPlatformCerts(certs: Record<string, PublicKey | string>): void;
    getPlatformCertKey(): string;
    setPlatformCertKey(key: string): this;
    loadPlatformCerts(force?: boolean): Promise<Record<string, string>>;
}
export = Merchant;
