import HttpClientInterface from "../Contracts/HttpClientInterface";
import { AxiosRequestConfig } from 'axios';
import HttpClientResponse from "../HttpClientResponse";
declare class HttpClientMethodsMixin extends HttpClientInterface {
    /**
     * 发送get请求
     * @param url 请求地址
     * @param payload axios配置项
     * @returns
     */
    get(url: string, payload?: AxiosRequestConfig): Promise<HttpClientResponse>;
    /**
     * 发送post请求
     * @param url 请求地址
     * @param payload axios配置项
     * @returns
     */
    post(url: string, payload?: AxiosRequestConfig): Promise<HttpClientResponse>;
    /**
     * 发送patch请求
     * @param url 请求地址
     * @param payload axios配置项
     * @returns
     */
    patch(url: string, payload?: AxiosRequestConfig): Promise<HttpClientResponse>;
    /**
     * 发送put请求
     * @param url
     * @param payload axios配置项
     * @returns
     */
    put(url: string, payload?: AxiosRequestConfig): Promise<HttpClientResponse>;
    /**
     * 发送delete请求
     * @param url
     * @param payload axios配置项
     * @returns
     */
    delete(url: string, payload?: AxiosRequestConfig): Promise<HttpClientResponse>;
    /**
     * 发送post请求（JSON数据）
     * @param url 请求地址
     * @param data JSON对象
     * @param payload axios配置项
     * @returns
     */
    postJson(url: string, data: object, payload?: AxiosRequestConfig): Promise<HttpClientResponse>;
    /**
     * 发送patch请求（JSON数据）
     * @param url 请求地址
     * @param data JSON 对象
     * @param payload axios配置项
     * @returns
     */
    patchJson(url: string, data: object, payload?: AxiosRequestConfig): Promise<HttpClientResponse>;
    /**
     * 发送post请求（XML数据）
     * @param url 请求地址
     * @param data XML字符串 或 键值对
     * @param payload axios配置项
     * @returns
     */
    postXml(url: string, data: string | Record<string, any>, payload?: AxiosRequestConfig): Promise<HttpClientResponse>;
}
export = HttpClientMethodsMixin;
