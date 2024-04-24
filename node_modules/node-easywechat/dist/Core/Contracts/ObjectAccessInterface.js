'use strict';
/**
 * 兼容php的ArrayAccess接口
 */
class ObjectAccessInterface {
    /**
     * 判断键是否存在
     * @param key 键名
     * @returns
     */
    offsetExists(key) { return false; }
    /**
     * 获取键值
     * @param key 键名
     * @returns
     */
    offsetGet(key) { return null; }
    /**
     * 设置键值
     * @param key 键名
     * @param value 键值
     * @returns
     */
    offsetSet(key, value) { }
    /**
     * 删除键值
     * @param key 键名
     * @returns
     */
    offsetUnset(key) { }
}
;
module.exports = ObjectAccessInterface;
