import BaseAccessToken from "../OfficialAccount/AccessToken";
declare class AccessToken extends BaseAccessToken {
    /**
     * 缓存前缀
     */
    protected CACHE_KEY_PREFIX: string;
}
export = AccessToken;
