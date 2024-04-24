import ServerRequestInterface from "../Http/Contracts/ServerRequestInterface";
declare class ServerRequestMixin {
    protected request: ServerRequestInterface;
    /**
     * 获取请求实例
     * @returns
     */
    getRequest(): ServerRequestInterface;
    /**
     * 设置请求实例
     * @param request
     * @returns
     */
    setRequest(request: ServerRequestInterface): this;
}
export = ServerRequestMixin;
