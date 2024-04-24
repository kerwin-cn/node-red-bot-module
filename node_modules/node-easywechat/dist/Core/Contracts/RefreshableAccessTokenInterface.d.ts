import AccessTokenInterface from "./AccessTokenInterface";
declare abstract class RefreshableAccessTokenInterface extends AccessTokenInterface {
    /**
     * 刷新token
     * @returns
     */
    refresh(): Promise<string>;
}
export = RefreshableAccessTokenInterface;
