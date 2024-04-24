import ConfigInterface from '../Core/Contracts/ConfigInterface';
import Encryptor from '../Core/Encryptor';
import CacheMixin from '../Core/Mixins/CacheMixin';
import ConfigMixin from '../Core/Mixins/ConfigMixin';
import HttpClientMixin from '../Core/Mixins/HttpClientMixin';
import ServerRequestMixin from '../Core/Mixins/ServerRequestMixin';
import { PayConfig } from '../Types/global';
import Merchant from './Merchant';
import MerchantInterface from './Contracts/MerchantInterface';
import ApplicationInterface from './Contracts/ApplicationInterface';
import Server from './Server';
import Utils from './Utils';
import Client from './Client';
import Validator from './Validator';
import ValidatorInterface from './Contracts/ValidatorInterface';
/**
 * 微信支付应用
 */
declare class Application implements ApplicationInterface {
    constructor(config: ConfigInterface | PayConfig);
    protected merchant: MerchantInterface;
    protected encryptor: Encryptor;
    protected server: Server;
    protected client: Client;
    protected utils: Utils;
    protected validator: ValidatorInterface;
    getMerchant(): Merchant;
    /**
     * 设置当前账户实例
     * @param merchant
     * @returns
     */
    setMerchant(merchant: MerchantInterface): this;
    getServer(): Server;
    /**
     * 设置服务端实例
     * @param server
     * @returns
     */
    setServer(server: Server): this;
    /**
     * 设置工具实例
     * @param utils
     */
    setUtils(utils: Utils): void;
    getUtils(): Utils;
    /**
     * 设置验证器实例
     * @param validator
     */
    setValidator(validator: ValidatorInterface): void;
    getValidator(): Validator;
    getClient(): Client;
    /**
     * 设置客户端
     * @param client
     * @returns
     */
    setClient(client: Client): this;
    /**
     * 获取请求默认配置
     * @returns
     */
    protected getHttpClientDefaultOptions(): Record<string, any>;
}
interface Application extends ConfigMixin, CacheMixin, ServerRequestMixin, HttpClientMixin {
}
export = Application;
