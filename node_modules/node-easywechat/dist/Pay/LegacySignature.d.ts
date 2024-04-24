import MerchantInterface from "./Contracts/MerchantInterface";
declare class LegacySignature {
    protected merchant: MerchantInterface;
    constructor(merchant: MerchantInterface);
    /**
     * V2版本的签名计算，并返回带签名字段的参数集合
     * @param params 参数集合
     * @returns
     */
    sign(params: Record<string, string | number>): Record<string, string | number>;
}
export = LegacySignature;
