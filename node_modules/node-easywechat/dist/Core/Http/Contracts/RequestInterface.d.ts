import MessageInterface from "./MessageInterface";
declare abstract class RequestInterface extends MessageInterface {
    /**
     * 获取请求路径，默认返回：'/'
     * @returns
     */
    getRequestTarget(): string;
    /**
     * 设置请求路径
     * @param requestTarget
     * @returns
     */
    withRequestTarget(requestTarget: string): this;
    /**
     * 获取请求方式
     * @returns
     */
    getMethod(): string;
    /**
     * 设置请求方式
     * @param method
     * @returns
     */
    withMethod(method: string): this;
    /**
     * 获取请求地址
     * @returns
     */
    getUri(): string;
    /**
     * 设置请求地址
     * @param uri
     * @returns
     */
    withUri(uri: string): this;
}
export = RequestInterface;
