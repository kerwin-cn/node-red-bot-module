import ServerRequestInterface from '../Core/Http/Contracts/ServerRequestInterface';
import Encryptor from '../Core/Encryptor';
import ServerInterface from '../Core/Contracts/ServerInterface';
import Response from '../Core/Http/Response';
import Message from './Message';
import { ServerHandlerClosure } from '../Types/global';
declare class Server extends ServerInterface {
    protected encryptor: Encryptor;
    protected request: ServerRequestInterface;
    protected defaultVerifyTicketHandler: ServerHandlerClosure<Message>;
    constructor(encryptor: Encryptor, request?: ServerRequestInterface);
    /**
     * 服务端消息处理
     * @returns
     */
    serve(): Promise<Response>;
    /**
     * 处理授权成功通知
     * @param handler
     * @returns
     */
    handleAuthorized(handler: ServerHandlerClosure<Message>): this;
    /**
     * 处理取消授权通知
     * @param handler
     * @returns
     */
    handleUnauthorized(handler: ServerHandlerClosure<Message>): this;
    /**
     * 处理授权更新通知
     * @param handler
     * @returns
     */
    handleAuthorizeUpdated(handler: ServerHandlerClosure<Message>): this;
    /**
     * 设置默认的验证票据通知处理回调
     * @param handler
     * @returns
     */
    withDefaultVerifyTicketHandler(handler: ServerHandlerClosure<Message>): void;
    /**
     * 处理验证票据通知
     * @param handler
     * @returns
     */
    handleVerifyTicketRefreshed(handler: ServerHandlerClosure<Message>): this;
    /**
     * 处理快速注册企业小程序审核通知
     * @param handler
     * @returns
     */
    handleThirdFastRegister(handler: ServerHandlerClosure<Message>): this;
    protected decryptRequestMessage(): ServerHandlerClosure<Message>;
    /**
     * 获取来自微信服务器的推送消息
     * @param request 未设置该参数时，则从当前服务端收到的请求中获取
     * @returns
     */
    getRequestMessage(request?: ServerRequestInterface): Promise<Message>;
    /**
     * 获取来自微信服务器的推送消息（解密后）
     * @param request 未设置该参数时，则从当前服务端收到的请求中获取
     * @returns
     */
    getDecryptedMessage(request?: ServerRequestInterface): Promise<Message>;
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
