declare class Obj {
    /**
     * 获取属性
     * @param obj 对象
     * @param key 属性，支持“.”作为层级分隔符的多层级查询
     * @param defaultValue 默认值，默认：null
     * @returns
     */
    static get(obj: Record<string, any>, key: string, defaultValue?: any): any;
    /**
     * 判断属性是否存在
     * @param obj 对象
     * @param key 属性，不支持多层级查询
     * @returns
     */
    static exists(obj: Record<string, any>, key: string): boolean;
    /**
     * 设置属性
     * @param obj 对象
     * @param key 属性，支持“.”作为层级分隔符的多层级查询
     * @param value 值
     * @returns
     */
    static set(obj: Record<string, any>, key: string, value: any): Record<string, any>;
    /**
     * 将所有属性的属性转为以“.”分隔。如：
     * ```
     * {
     *   "aa": {
     *     "b1": {
     *       "cc":123
     *     },
     *     "b2": "xxx"
     *   }
     * }
     * ```
     * 转换后：
     * ```
     * {
     *    "aa.b1.cc": 123,
     *    "aa.b2": "xxx"
     * }
     * ```
     * @param obj 对象
     * @param prepend 前缀，默认：''
     * @returns
     */
    static dot(obj: Record<string, any>, prepend?: string): Record<string, any>;
    /**
     * 判断属性是否存在。如：
     * ```
     * Obj.has(obj, 'attr');
     * Obj.has(obj, 'aa.bb.cc');
     * Obj.has(obj, ['attr', 'aa.bb.cc']);
     * ```
     * @param obj 对象
     * @param keys 属性，支持“.”作为层级分隔符的多层级查询，也支持多个属性
     * @returns
     */
    static has(obj: Record<string, any>, keys: string | string[]): boolean;
}
export = Obj;
