'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Config_1 = __importDefault(require("../Core/Config"));
class Config extends Config_1.default {
    constructor() {
        super(...arguments);
        this.requiredKeys = [
            'corp_id',
            'suite_id',
            'provider_secret',
            'suite_secret',
            'token',
            'aes_key',
        ];
    }
}
module.exports = Config;
