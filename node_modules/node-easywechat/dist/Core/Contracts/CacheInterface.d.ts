/**
 * 缓存接口
 */
declare abstract class CacheInterface {
    /**
     * 获取缓存
     * @param key 缓存名
     * @returns
     */
    get(key: string): Promise<any>;
    /**
     * 设置缓存
     * @param key 缓存名
     * @returns
     */
    has(key: string): Promise<boolean>;
    /**
     * 设置缓存
     * @param key 缓存名
     * @param data 数据
     * @param lifetime 过期时间，单位：秒
     * @returns
     */
    set(key: string, data?: any, lifetime?: number): Promise<boolean>;
    /**
     * 删除缓存
     * @param key 缓存名
     * @returns
     */
    delete(key: string): Promise<boolean>;
}
export = CacheInterface;
