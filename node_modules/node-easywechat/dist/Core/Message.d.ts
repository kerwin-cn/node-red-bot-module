import ServerRequestInterface from "./Http/Contracts/ServerRequestInterface";
import HasAttributesMixin from "./Mixins/HasAttributesMixin";
/**
 * 消息对象
 */
declare class Message {
    /**
     * 原始消息内容
     */
    protected originContent: string;
    constructor(attributes: Record<string, any>, originContent?: string);
    /**
     * 根据请求内容生成消息对象
     * @param request
     * @returns
     */
    static createFromRequest(request: ServerRequestInterface): Promise<Message>;
    /**
     * 获取原始消息内容
     * @returns
     */
    getOriginalContents(): string;
    /**
     * 转为字符串
     * @returns
     */
    toString(): string;
}
interface Message extends Record<string, any>, HasAttributesMixin {
}
export = Message;
