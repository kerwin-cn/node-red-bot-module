import ConfigInterface from '../Core/Contracts/ConfigInterface';
import Encryptor from '../Core/Encryptor';
import AccessTokenAwareClient from '../Core/HttpClient/AccessTokenAwareClient';
import CacheMixin from '../Core/Mixins/CacheMixin';
import ClientMixin from '../Core/Mixins/ClientMixin';
import ConfigMixin from '../Core/Mixins/ConfigMixin';
import HttpClientMixin from '../Core/Mixins/HttpClientMixin';
import ServerRequestMixin from '../Core/Mixins/ServerRequestMixin';
import { MiniAppConfig } from '../Types/global';
import AccountInterface from './Contracts/AccountInterface';
import ApplicationInterface from './Contracts/ApplicationInterface';
import Server from './Server';
import Utils from './Utils';
import AccessTokenInterface from '../Core/Contracts/AccessTokenInterface';
/**
 * 小程序应用
 */
declare class Application implements ApplicationInterface {
    constructor(config: ConfigInterface | MiniAppConfig);
    protected account: AccountInterface;
    protected encryptor: Encryptor;
    protected server: Server;
    protected accessToken: AccessTokenInterface;
    protected utils: Utils;
    getAccount(): AccountInterface;
    /**
     * 设置当前账户实例
     * @param account
     * @returns
     */
    setAccount(account: AccountInterface): this;
    getEncryptor(): Encryptor;
    /**
     * 设置加密机实例
     * @param encryptor
     * @returns
     */
    setEncryptor(encryptor: Encryptor): this;
    getServer(): Server;
    /**
     * 设置服务端实例
     * @param server
     * @returns
     */
    setServer(server: Server): this;
    getAccessToken(): AccessTokenInterface;
    /**
     * 设置AccessToken实例
     * @param accessToken
     * @returns
     */
    setAccessToken(accessToken: AccessTokenInterface): this;
    /**
     * 设置工具实例
     * @param utils
     */
    setUtils(utils: Utils): void;
    getUtils(): Utils;
    createClient(): AccessTokenAwareClient;
    /**
     * 获取请求默认配置
     * @returns
     */
    protected getHttpClientDefaultOptions(): Record<string, any>;
}
interface Application extends ConfigMixin, CacheMixin, ClientMixin, ServerRequestMixin, HttpClientMixin {
}
export = Application;
