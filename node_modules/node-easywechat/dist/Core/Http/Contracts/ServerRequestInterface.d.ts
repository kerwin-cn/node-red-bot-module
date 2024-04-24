import RequestInterface from "./RequestInterface";
declare abstract class ServerRequestInterface extends RequestInterface {
    /**
     * 获取所有服务端参数
     * @returns
     */
    getServerParams(): Record<string, any>;
    /**
     * 获取所有cookie参数
     * @returns
     */
    getCookieParams(): Record<string, any>;
    /**
     * 设置cookie参数
     * @param cookies
     * @returns
     */
    withCookieParams(cookies: Record<string, any>): this;
    /**
     * 获取所有get参数
     * @returns
     */
    getQueryParams(): Record<string, any>;
    /**
     * 设置get参数
     * @param query
     * @returns
     */
    withQueryParams(query: Record<string, any>): this;
    /**
     * 获取所有上传文件
     * @returns
     */
    getUploadedFiles(): Record<string, any>;
    /**
     * 设置上传文件
     * @param files
     * @returns
     */
    withUploadedFiles(files: Record<string, any>): this;
    /**
     * 获取所有post参数
     * @returns
     */
    getParsedBody(): Promise<Record<string, any>>;
    /**
     * 设置post参数
     * @param data
     * @returns
     */
    withParsedBody(data: Record<string, any>): this;
    /**
     * 获取所有属性
     * @returns
     */
    getAttributes(): Record<string, any>;
    /**
     * 获取单个属性
     * @param name
     * @param defaultValue
     * @returns
     */
    getAttribute(name: string, defaultValue?: any): any;
    /**
     * 设置属性值
     * @param name
     * @param value
     * @returns
     */
    withAttribute(name: string, value: any): this;
    /**
     * 删除属性
     * @param name
     * @returns
     */
    withoutAttribute(name: string): this;
}
export = ServerRequestInterface;
