'use strict';
class RequestMixin {
    constructor() {
        this.requestTarget = '';
        this.method = '';
    }
    getRequestTarget() {
        return this.requestTarget;
    }
    withRequestTarget(requestTarget) {
        this.requestTarget = requestTarget;
        return this;
    }
    getMethod() {
        return this.method;
    }
    withMethod(method) {
        this.method = method.toUpperCase();
        return this;
    }
    getUri() {
        return this.uri;
    }
    withUri(uri) {
        this.uri = uri;
        return this;
    }
}
;
module.exports = RequestMixin;
