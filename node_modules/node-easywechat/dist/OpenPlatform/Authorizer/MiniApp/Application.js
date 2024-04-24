"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Application_1 = __importDefault(require("../../../MiniApp/Application"));
const Utils_1 = __importDefault(require("./Utils"));
class Application extends Application_1.default {
    constructor(config, componentApp) {
        super(config);
        this.componentApp = null;
        this.utils = null;
        this.componentApp = componentApp;
    }
    getComponentApp() {
        return this.componentApp;
    }
    setUtils(utils) {
        this.utils = utils;
    }
    getUtils() {
        if (!this.utils) {
            this.utils = new Utils_1.default(this);
        }
        return this.utils;
    }
}
;
module.exports = Application;
