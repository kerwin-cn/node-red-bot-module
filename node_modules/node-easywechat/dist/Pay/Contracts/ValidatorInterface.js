'use strict';
class ValidatorInterface {
    /**
     * 验证请求是否正确
     */
    validate(request) { return Promise.resolve(true); }
    /**
     * 验证请求是否正确（v2）
     */
    validateV2(message) { return true; }
}
;
module.exports = ValidatorInterface;
