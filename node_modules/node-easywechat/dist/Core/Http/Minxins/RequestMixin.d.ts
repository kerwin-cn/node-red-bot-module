declare class RequestMixin {
    protected requestTarget: string;
    protected method: string;
    protected uri: string;
    getRequestTarget(): string;
    withRequestTarget(requestTarget: string): this;
    getMethod(): string;
    withMethod(method: string): this;
    getUri(): string;
    withUri(uri: string): this;
}
export = RequestMixin;
