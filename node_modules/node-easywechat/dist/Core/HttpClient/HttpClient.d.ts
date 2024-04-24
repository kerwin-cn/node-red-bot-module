import { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import HttpClientInterface from './Contracts/HttpClientInterface';
import HttpClientResponse from './HttpClientResponse';
import { HttpClientFailureJudgeClosure, HttpConfig, LogHandler } from '../../Types/global';
import FormData from 'form-data';
declare class HttpClient implements HttpClientInterface {
    protected axios: AxiosInstance;
    protected failureJudge: HttpClientFailureJudgeClosure;
    protected throwError: boolean;
    /**
     * 日志处理方法
     */
    protected logger: LogHandler;
    constructor(axios: AxiosInstance, failureJudge?: HttpClientFailureJudgeClosure, throwError?: boolean);
    setLogger(logger: LogHandler): this;
    judgeFailureUsing(closure: HttpClientFailureJudgeClosure): this;
    request(method: Method, url: string, payload?: AxiosRequestConfig<any>): Promise<HttpClientResponse>;
    getInstance(): AxiosInstance;
    setInstance(instance: AxiosInstance): this;
    /**
     * 获取 FormData 对象的 headers
     * @param formData
     * @returns
     */
    protected getFormDataHeaders(formData: FormData): Promise<Record<string, string | number>>;
    /**
     * 创建http客户端
     * @param config
     * @returns
     */
    static create(config?: HttpConfig, failureJudge?: HttpClientFailureJudgeClosure, throwError?: boolean): HttpClient;
}
export = HttpClient;
