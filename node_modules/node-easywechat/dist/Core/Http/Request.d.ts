import RequestInterface from "./Contracts/RequestInterface";
import MessageMixin from "./Minxins/MessageMixin";
import RequestMixin from "./Minxins/RequestMixin";
declare class Request implements RequestInterface {
    constructor(method: string, uri: string, headers?: Record<string, any>, content?: any, version?: string);
}
interface Request extends MessageMixin, RequestMixin {
}
export = Request;
