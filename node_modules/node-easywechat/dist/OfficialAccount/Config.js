'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Config_1 = __importDefault(require("../Core/Config"));
class Config extends Config_1.default {
    constructor() {
        super(...arguments);
        this.requiredKeys = [
            'app_id',
        ];
    }
}
module.exports = Config;
