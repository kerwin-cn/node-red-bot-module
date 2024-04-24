import ResponseInterface from "./Contracts/ResponseInterface";
import MessageMixin from "./Minxins/MessageMixin";
declare class Response implements ResponseInterface {
    private PHRASES;
    protected statusCode: number;
    protected reasonPhrase: string;
    constructor(statusCode?: number, headers?: Record<string, any>, content?: any, version?: string, reason?: string);
    getStatusCode(): number;
    withStatus(code: number, reasonPhrase?: string): this;
    getReasonPhrase(): string;
}
interface Response extends MessageMixin {
}
export = Response;
