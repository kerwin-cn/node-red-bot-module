import ObjectAccessInterface from '../Contracts/ObjectAccessInterface';
declare class HasAttributesMixin implements ObjectAccessInterface {
    /**
     * 属性对象
     */
    protected attributes: Record<string, any>;
    /**
     * 返回对象格式
     * @returns
     */
    toObject(): Record<string, any>;
    /**
     * 返回json字符串
     * @returns
     */
    toJson(): string;
    /**
     * 判断键是否存在
     * @param key
     * @returns
     */
    has(key: string): boolean;
    /**
     * 合并属性对象
     * @param attributes 新属性对象
     * @returns
     */
    merge(attributes: Record<string, any>): this;
    /**
     * 设置单个属性值
     * @param key
     * @param value
     */
    set(key: string, value: any): void;
    /**
     * 获取单个属性值
     * @param key
     * @returns
     */
    get(key: string): any;
    offsetExists(key: any): boolean;
    offsetGet(key: any): any;
    offsetSet(key: any, value: any): void;
    offsetUnset(key: any): void;
}
export = HasAttributesMixin;
