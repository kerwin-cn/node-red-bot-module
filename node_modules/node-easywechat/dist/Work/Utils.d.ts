import Application from './Application';
declare class Utils {
    protected app: Application;
    constructor(app: Application);
    /**
     * 构建jssdk配置
     * @param url 完整URL地址
     * @param jsApiList api列表，默认：[]。可用列表：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#63
     * @param openTagList 开放标签列表，默认：[]。可用列表：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html#附录-所有开放标签列表
     * @param debug 是否开启调试模式，默认：false
     * @returns
     */
    buildJsSdkConfig(url: string, jsApiList?: string[], openTagList?: string[], debug?: boolean): Promise<Record<string, any>>;
    /**
     * 构建代理应用的jssdk配置
     * @param agentId 代理应用id
     * @param url 完整URL地址
     * @param jsApiList api列表，默认：[]。可用列表：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#63
     * @param openTagList 开放标签列表，默认：[]。可用列表：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html#附录-所有开放标签列表
     * @param debug 是否开启调试模式，默认：false
     * @returns
     */
    buildJsSdkAgentConfig(agentId: number, url: string, jsApiList?: string[], openTagList?: string[], debug?: boolean): Promise<Record<string, any>>;
}
export = Utils;
