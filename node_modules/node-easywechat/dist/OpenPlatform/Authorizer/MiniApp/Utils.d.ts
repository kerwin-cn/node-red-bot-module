import Application from '../../Authorizer/MiniApp/Application';
import BaseUtils from '../../../MiniApp/Utils';
declare class Utils extends BaseUtils {
    protected app: Application;
    constructor(app: Application);
    /**
     * 代理小程序登录
     * @see https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/login/thirdpartyCode2Session.html
     * @param code
     * @returns
     */
    code2Session(code: string): Promise<import("../../../Types/global").WeixinResponse>;
}
export = Utils;
