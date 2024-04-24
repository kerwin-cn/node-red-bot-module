import HasAttributesMixin from "../Core/Mixins/HasAttributesMixin";
import AuthorizerAccessToken from "./AuthorizerAccessToken";
declare class Authorization {
    constructor(attributes?: Record<string, any>);
    /**
     * 获取appid
     * @returns
     */
    getAppId(): string;
    /**
     * 获取access_token
     * @returns
     */
    getAccessToken(): AuthorizerAccessToken;
    /**
     * 获取refresh_token
     * @returns
     */
    getRefreshToken(): string;
}
interface Authorization extends HasAttributesMixin {
}
export = Authorization;
