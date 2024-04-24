import ServerInterface from '../Core/Contracts/ServerInterface';
import Response from '../Core/Http/Response';
import ServerRequestInterface from '../Core/Http/Contracts/ServerRequestInterface';
import MerchantInterface from './Contracts/MerchantInterface';
import Message from './Message';
import { ServerHandlerClosure } from '../Types/global';
declare class Server extends ServerInterface {
    protected merchant: MerchantInterface;
    protected request: ServerRequestInterface;
    constructor(merchant?: MerchantInterface, request?: ServerRequestInterface);
    /**
     * 服务端消息处理
     * @returns
     */
    serve(): Promise<Response>;
    /**
     * 获取来自微信服务器的推送消息
     * @param request 未设置该参数时，则从当前服务端收到的请求中获取
     * @returns
     */
    getRequestMessage(request?: ServerRequestInterface): Promise<Message>;
    protected decodeXmlMessage(attributes: Record<string, any>): Promise<Record<string, any>>;
    protected decodeJsonMessage(attributes: Record<string, any>): Record<string, any>;
    /**
     * 获取解密后的消息
     * @param request
     * @returns
     */
    getDecryptedMessage(request?: ServerRequestInterface): Promise<Message>;
    /**
     * 处理付款回调
     * @param handler 消息处理器，需要接受两个参数，参数1是消息，参数2是下一个消息处理器
     * @returns
     */
    handlePaid(handler: ServerHandlerClosure<Message>): this;
    /**
     * 处理退款回调
     * @param handler 消息处理器，需要接受两个参数，参数1是消息，参数2是下一个消息处理器
     * @returns
     */
    handleRefunded(handler: ServerHandlerClosure<Message>): this;
}
interface Server {
    with(next: ServerHandlerClosure<Message>): this;
    withHandler(next: ServerHandlerClosure<Message>): this;
    prepend(next: ServerHandlerClosure<Message>): this;
    prependHandler(next: ServerHandlerClosure<Message>): this;
    without(next: ServerHandlerClosure<Message>): this;
    withoutHandler(next: ServerHandlerClosure<Message>): this;
}
export = Server;
