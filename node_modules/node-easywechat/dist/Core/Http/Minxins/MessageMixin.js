'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const merge_1 = __importDefault(require("merge"));
class MessageMixin {
    constructor() {
        this.headers = {};
        this.protocal = '1.1';
    }
    getProtocolVersion() {
        return this.protocal;
    }
    withProtocolVersion(protocal) {
        this.protocal = protocal;
        return this;
    }
    getHeaders() {
        return this.headers;
    }
    hasHeader(name) {
        return this.headers[name.toLowerCase()] !== undefined;
    }
    getHeader(name) {
        return this.headers[name.toLowerCase()];
    }
    getHeaderLine(name) {
        let values = this.getHeader(name);
        if (values && Object.prototype.toString.call(values) == '[object Array]') {
            return values.join(',');
        }
        return values;
    }
    withHeader(name, value) {
        this.headers[name.toLowerCase()] = value;
        return this;
    }
    withAddedHeader(name, value) {
        let oldValue = this.getHeader(name);
        if (oldValue === undefined || oldValue === null) {
            return this.withHeader(name, value);
        }
        name = name.toLowerCase();
        if (Object.prototype.toString.call(oldValue) != '[object Array]') {
            this.headers[name] = [oldValue];
        }
        if (Object.prototype.toString.call(value) == '[object Array]') {
            this.headers[name] = oldValue.concat(value);
        }
        else {
            this.headers[name].push(value);
        }
        return this;
    }
    withoutHeader(name) {
        name = name.toLowerCase();
        this.headers[name] = undefined;
        delete this.headers[name];
        return this;
    }
    getBody() {
        return this.content;
    }
    withBody(body) {
        if (Buffer.isBuffer(body)) {
            this.content = body;
        }
        else if (typeof body === 'string') {
            this.content = Buffer.from(body);
        }
        else {
            this.content = Buffer.from(JSON.stringify(body));
        }
        return this;
    }
    /**
     * 设置headers
     * @param headers
     * @returns
     */
    setHeaders(headers) {
        this.headers = merge_1.default.recursive(true, headers);
        for (let key in this.headers) {
            if (key !== key.toLowerCase()) {
                this.headers[key.toLowerCase()] = this.headers[key];
            }
        }
        return this;
    }
}
;
module.exports = MessageMixin;
