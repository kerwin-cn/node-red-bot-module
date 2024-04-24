'use strict';
class MessageInterface {
    /**
     * 获取 HTTP 协议版本，如：'1.1', '1.0'
     * @returns
     */
    getProtocolVersion() { return null; }
    /**
     * 设置 HTTP 协议版本
     * @param version
     * @returns
     */
    withProtocolVersion(version) { return this; }
    /**
     * 获取所有headers
     * @returns
     */
    getHeaders() { return null; }
    /**
     * 判断header是否存在
     * @param name
     * @returns
     */
    hasHeader(name) { return false; }
    /**
     * 获取header
     * @param name
     * @returns
     */
    getHeader(name) { return null; }
    /**
     * 获取header，逗号分隔同名header
     * @param name
     * @returns
     */
    getHeaderLine(name) { return null; }
    /**
     * 设置header值
     * @param name
     * @param value
     * @returns
     */
    withHeader(name, value) { return this; }
    /**
     * 附加header值
     * @param name
     * @param value
     * @returns
     */
    withAddedHeader(name, value) { return this; }
    /**
     * 删除header
     * @param name
     * @returns
     */
    withoutHeader(name) { return this; }
    /**
     * 获取body内容
     * @returns
     */
    getBody() { return null; }
    /**
     * 设置body内容
     * @param body
     * @returns
     */
    withBody(body) { return this; }
}
;
module.exports = MessageInterface;
