import CacheInterface from "../Contracts/CacheInterface";
declare class CacheMixin {
    protected cache: CacheInterface;
    protected cacheLifetime: number;
    protected cacheNamespace: string;
    /**
     * 获取缓存过期时间，单位：秒
     * @returns
     */
    getCacheLifetime(): number;
    /**
     * 设置缓存过期时间，单位：秒
     * @param cacheLifetime
     * @returns
     */
    setCacheLifetime(cacheLifetime: number): void;
    /**
     * 获取缓存命名空间
     * @returns
     */
    getCacheNamespace(): string;
    /**
     * 设置缓存命名空间
     * @param cacheNamespace
     * @returns
     */
    setCacheNamespace(cacheNamespace: string): void;
    /**
     * 获取缓存实例
     * @returns
     */
    getCache(): CacheInterface;
    /**
     * 设置缓存实例
     * @param cache
     * @returns
     */
    setCache(cache: CacheInterface): this;
}
export = CacheMixin;
