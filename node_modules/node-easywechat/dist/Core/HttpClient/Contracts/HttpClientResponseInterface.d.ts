declare abstract class HttpClientResponseInterface {
    /**
     * 获取响应状态码
     * @returns
     */
    getStatusCode(): number;
    /**
     * 获取headers
     * @param throwError 错误码为3xx,4xx,5xx时是否报错
     * @returns
     */
    getHeaders(throwError?: boolean): Record<string, any>;
    /**
     * 获取响应的内容
     * @param throwError 错误码为3xx,4xx,5xx时是否报错
     * @returns
     */
    getContent(throwError?: boolean): string;
    /**
     * 转为对象
     * @param throwError 错误码为3xx,4xx,5xx时是否报错
     * @returns
     */
    toObject(throwError?: boolean): Record<string, any>;
    /**
     * 清空响应流
     */
    cancel(): void;
    /**
     * 返回信息
     * @param type 信息类型，默认：null表示返回全部
     */
    getInfo(type?: string): any;
}
export = HttpClientResponseInterface;
