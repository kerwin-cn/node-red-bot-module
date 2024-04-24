import CacheInterface from "../../Core/Contracts/CacheInterface";
import ConfigInterface from "../../Core/Contracts/ConfigInterface";
import HttpClientInterface from "../../Core/HttpClient/Contracts/HttpClientInterface";
import ServerInterface from "../../Core/Contracts/ServerInterface";
import ServerRequestInterface from "../../Core/Http/Contracts/ServerRequestInterface";
import MerchantInterface from "./MerchantInterface";
import Utils from "../Utils";
import ValidatorInterface from "./ValidatorInterface";
declare abstract class ApplicationInterface {
    /**
     * 获取当前账户实例
     * @returns
     */
    getMerchant(): MerchantInterface;
    /**
     * 获取服务端实例
     * @returns
     */
    getServer(): ServerInterface;
    /**
     * 获取当前请求实例
     * @returns
     */
    getRequest(): ServerRequestInterface;
    /**
     * 获取客户端实例
     * @returns
     */
    getClient(): HttpClientInterface;
    /**
     * 获取网络请求客户端实例
     * @returns
     */
    getHttpClient(): HttpClientInterface;
    /**
     * 获取配置信息实例
     * @returns
     */
    getConfig(): ConfigInterface;
    /**
     * 获取缓存实例
     * @returns
     */
    getCache(): CacheInterface;
    /**
     * 获取工具实例
     * @returns
     */
    getUtils(): Utils;
    /**
     * 获取验证器实例
     * @returns
     */
    getValidator(): ValidatorInterface;
}
export = ApplicationInterface;
