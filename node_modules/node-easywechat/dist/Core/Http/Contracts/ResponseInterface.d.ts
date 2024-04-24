import MessageInterface from "./MessageInterface";
declare abstract class ResponseInterface extends MessageInterface {
    /**
     * 获取响应状态码
     * @returns
     */
    getStatusCode(): number;
    /**
     * 设置响应状态
     * @param code 状态码
     * @param reasonPhrase 状态码描述
     * @returns
     */
    withStatus(code: number, reasonPhrase?: string): this;
    /**
     * 获取状态码描述
     * @returns
     */
    getReasonPhrase(): string;
}
export = ResponseInterface;
