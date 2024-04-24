import AccessTokenInterface from "../../Contracts/AccessTokenInterface";
import HttpClientInterface from "./HttpClientInterface";
declare abstract class AccessTokenAwareHttpClientInterface extends HttpClientInterface {
    /**
     * 设置AccessToken实例
     */
    withAccessToken(accessToken: AccessTokenInterface): this;
}
export = AccessTokenAwareHttpClientInterface;
