import CacheInterface from '../Core/Contracts/CacheInterface';
import SuiteTicketInterface from './Contracts/SuiteTicketInterface';
declare class SuiteTicket implements SuiteTicketInterface {
    protected suiteId: string;
    protected cache: CacheInterface;
    protected key: string;
    constructor(suiteId: string, cache?: CacheInterface, key?: string);
    getKey(): string;
    setKey(key: string): this;
    setTicket(ticket: string): Promise<this>;
    getTicket(): Promise<string>;
}
export = SuiteTicket;
