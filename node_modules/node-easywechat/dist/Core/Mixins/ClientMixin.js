'use strict';
class ClientMixin {
    /**
     * 获取客户端实例
     * @returns
     */
    getClient() {
        if (!this.client) {
            this.client = this.createClient();
        }
        return this.client;
    }
    /**
     * 设置客户端实例
     * @param client
     * @returns
     */
    setClient(client) {
        this.client = client;
        return this;
    }
}
;
module.exports = ClientMixin;
