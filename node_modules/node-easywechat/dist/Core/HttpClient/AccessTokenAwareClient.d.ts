import { Method, AxiosRequestConfig, AxiosInstance } from "axios";
import AccessTokenAwareHttpClientInterface from "./Contracts/AccessTokenAwareHttpClientInterface";
import AccessTokenInterface from "../Contracts/AccessTokenInterface";
import HttpClientInterface from "./Contracts/HttpClientInterface";
import HttpClientMethodsMixin from './Mixins/HttpClientMethodsMixin';
import { HttpClientFailureJudgeClosure, LogHandler } from '../../Types/global';
import HttpClientResponse from './HttpClientResponse';
import PresetMixin from './Mixins/PresetMixin';
declare class AccessTokenAwareClient implements AccessTokenAwareHttpClientInterface, HttpClientInterface {
    protected client: HttpClientInterface;
    protected accessToken: AccessTokenInterface;
    constructor(client: HttpClientInterface, accessToken?: AccessTokenInterface, failureJudge?: HttpClientFailureJudgeClosure, throwError?: boolean);
    withAccessToken(accessToken: AccessTokenInterface): this;
    getInstance(): AxiosInstance;
    setInstance(instance: AxiosInstance): this;
    setLogger(logger: LogHandler): this;
    request(method: Method, url: string, payload?: AxiosRequestConfig<any>): Promise<HttpClientResponse>;
}
interface AccessTokenAwareClient extends HttpClientMethodsMixin, PresetMixin {
}
export = AccessTokenAwareClient;
