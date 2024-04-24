'use strict';
class ServerRequestMixin {
    /**
     * 获取请求实例
     * @returns
     */
    getRequest() {
        if (!this.request) {
            throw new Error('Please set request instance before use.');
        }
        return this.request;
    }
    /**
     * 设置请求实例
     * @param request
     * @returns
     */
    setRequest(request) {
        this.request = request;
        return this;
    }
}
;
module.exports = ServerRequestMixin;
