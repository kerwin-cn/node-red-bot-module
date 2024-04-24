import { AxiosResponse } from "axios";
import { HttpClientFailureJudgeClosure, WeixinResponse } from "../../Types/global";
import HttpClientResponseInterface from "./Contracts/HttpClientResponseInterface";
import Response from "../Http/Response";
declare class HttpClientResponse implements HttpClientResponseInterface {
    protected response: AxiosResponse;
    protected failureJudge: HttpClientFailureJudgeClosure;
    protected throwError: boolean;
    protected parsedContent: Record<string, any>;
    constructor(response: AxiosResponse, failureJudge?: HttpClientFailureJudgeClosure, throwError?: boolean);
    /**
     * 设置解析后的body内容
     * @param content
     * @returns
     */
    setParsedContent(content: Record<string, any>): this;
    /**
     * 解析body内容
     * @param throwError
     * @returns
     */
    parseContent(throwError?: boolean): Promise<void>;
    withThrowError(throwError: boolean): this;
    throwOnFailure(): this;
    quietly(): this;
    /**
     * 设置错误判断方法
     * @param closure
     * @returns
     */
    judgeFailureUsing(closure: HttpClientFailureJudgeClosure): this;
    /**
     * 获取请求是否失败
     * @returns
     */
    isFailed(): boolean;
    /**
     * 获取请求是否成功
     * @returns
     */
    isSuccessful(): boolean;
    /**
     * 返回对象格式
     * @returns
     */
    toObject<T = WeixinResponse>(): T;
    /**
     * 返回json字符串
     * @returns
     */
    toJson(): string;
    /**
     * 返回字符串
     * @returns
     */
    toString(): string;
    /**
     * 另存为文件
     * @param filename 完整的文件名（含路径）
     * @returns
     */
    saveAs(filename: string): string;
    /**
     * 返回base64字符串
     * @returns
     */
    toDataUrl(): string;
    /**
     * 判断 content-type 是否指定类型
     * @param type
     * @returns
     */
    is(type: 'json' | 'xml' | 'html' | 'image' | 'audio' | 'video' | 'text'): boolean;
    /**
     * 判断header是否存在
     * @param key
     * @returns
     */
    hasHeader(key: string): any;
    /**
     * 获取单个header
     * @param key
     * @returns
     */
    getHeader(key: string): any;
    getStatusCode(): number;
    getHeaders(throwError?: boolean): Record<string, any>;
    getContent(throwError?: boolean): any;
    cancel(): void;
    getInfo(type?: string): import("axios").InternalAxiosRequestConfig<any>;
    offsetExists(key: any): Promise<boolean>;
    offsetGet(key: any): Promise<any>;
    /**
     * 转换为标准的 http 响应类
     */
    toHttpResponse(): Response;
}
export = HttpClientResponse;
