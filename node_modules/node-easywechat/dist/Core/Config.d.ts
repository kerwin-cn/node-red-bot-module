import { OfficialAccountConfig, MiniAppConfig, PayConfig, OpenPlatformConfig, WorkConfig, OpenWorkConfig } from "../Types/global";
import ConfigInterface from "./Contracts/ConfigInterface";
declare class Config extends ConfigInterface {
    protected items: OfficialAccountConfig | MiniAppConfig | PayConfig | OpenPlatformConfig | WorkConfig | OpenWorkConfig;
    protected requiredKeys: string[];
    constructor(items?: OfficialAccountConfig | MiniAppConfig | PayConfig | OpenPlatformConfig | WorkConfig | OpenWorkConfig);
    /**
     * 检查是否有配置项缺失
     * @returns
     */
    checkMissingKeys(): boolean;
    /**
     * 获取所有配置项
     * @returns
     */
    all(): Record<string, any>;
    /**
     * 判断配置项是否存在
     * @param key
     * @returns
     */
    has(key: string): boolean;
    /**
     * 设置配置项
     * @param key
     * @param value
     */
    set(key: string, value: any): void;
    /**
     * 获取配置项
     * @param key
     * @param defaultValue
     * @returns
     */
    get(key: string | string[] | Record<string, any>, defaultValue?: any): any;
    /**
     * 获取多个配置项
     * @param keys 键名列表 或者 {键名:默认值} 格式的对象
     * @returns
     */
    getMany(keys: string[] | Record<string, any>): Record<string, any>;
    /**
     * 判断配置项是否存在
     * @param key
     * @returns
     */
    offsetExists(key: any): boolean;
    /**
     * 获取配置项
     * @param key
     * @returns
     */
    offsetGet(key: any): any;
    /**
     * 设置配置项
     * @param key
     * @param value
     */
    offsetSet(key: any, value: any): void;
    /**
     * 删除配置项
     * @param key
     */
    offsetUnset(key: any): void;
}
export = Config;
