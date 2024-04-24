import MerchantInterface from "./Contracts/MerchantInterface";
import { AxiosRequestConfig } from "axios";
declare class Signature {
    protected merchant: MerchantInterface;
    constructor(merchant: MerchantInterface);
    /**
     * V3版本的签名计算
     * @param method 请求方式
     * @param url 请求地址
     * @param payload 请求载荷
     * @param nonce 随机串，默认：随机生成
     * @param timestamp 时间戳，默认：当前时间
     * @returns
     */
    createHeader(method: string, url: string, payload: AxiosRequestConfig<any>, nonce?: string, timestamp?: number): string;
}
export = Signature;
