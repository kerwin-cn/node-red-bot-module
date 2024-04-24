import { Method, AxiosRequestConfig, AxiosInstance } from 'axios';
import { HttpClientFailureJudgeClosure, LogHandler } from '../../../Types/global';
import HttpClientResponse from '../HttpClientResponse';
declare abstract class HttpClientInterface {
    /**
     * 获取axios实例
     * @returns
     */
    getInstance(): AxiosInstance;
    /**
     * 设置axios实例
     */
    setInstance(instance: AxiosInstance): this;
    /**
     * 设置日志方法
     */
    setLogger(logger: LogHandler): this;
    /**
     * 设置错误判断方法
     * @param closure
     * @returns
     */
    judgeFailureUsing(closure: HttpClientFailureJudgeClosure): this;
    /**
     * 发起http请求
     */
    request(method: Method, url: string, payload: AxiosRequestConfig): Promise<HttpClientResponse>;
}
export = HttpClientInterface;
