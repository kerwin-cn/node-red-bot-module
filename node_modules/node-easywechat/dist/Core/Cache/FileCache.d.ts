import CacheInterface from '../Contracts/CacheInterface';
import { CacheFileConfig } from '../../Types/global';
declare class FileCache implements CacheInterface {
    private options;
    constructor(options?: CacheFileConfig);
    protected getCacheFile(id: string): string;
    protected getCacheContent(file: string): string;
    get(id: string): Promise<any>;
    has(id: string): Promise<boolean>;
    set(id: string, data?: any, lifeTime?: number): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}
export = FileCache;
