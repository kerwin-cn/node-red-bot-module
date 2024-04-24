'use strict';
class ConfigMixin {
    /**
     * 获取配置实例
     * @returns
     */
    getConfig() {
        return this.config;
    }
    /**
     * 设置配置实例
     * @param config
     * @returns
     */
    setConfig(config) {
        this.config = config;
        return this;
    }
}
;
module.exports = ConfigMixin;
