'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Utils_1 = require("../Support/Utils");
const MessageMixin_1 = __importDefault(require("./Minxins/MessageMixin"));
const RequestMixin_1 = __importDefault(require("./Minxins/RequestMixin"));
class Request {
    constructor(method, uri, headers = {}, content = null, version = '1.1') {
        this.withMethod(method)
            .withUri(uri)
            .setHeaders(headers)
            .withBody(content)
            .withProtocolVersion(version);
    }
}
;
;
(0, Utils_1.applyMixins)(Request, [MessageMixin_1.default, RequestMixin_1.default]);
module.exports = Request;
