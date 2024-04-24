import ConfigInterface from "../Contracts/ConfigInterface";
declare class ConfigMixin {
    protected config: ConfigInterface;
    /**
     * 获取配置实例
     * @returns
     */
    getConfig(): ConfigInterface;
    /**
     * 设置配置实例
     * @param config
     * @returns
     */
    setConfig(config: ConfigInterface): this;
}
export = ConfigMixin;
