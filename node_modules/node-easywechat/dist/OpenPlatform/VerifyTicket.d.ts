import CacheInterface from '../Core/Contracts/CacheInterface';
import VerifyTicketInterface from './Contracts/VerifyTicketInterface';
declare class VerifyTicket implements VerifyTicketInterface {
    protected appId: string;
    protected key: string;
    protected cache: CacheInterface;
    constructor(appId: string, key?: string, cache?: CacheInterface);
    getKey(): string;
    setKey(key: string): this;
    setTicket(ticket: string): Promise<this>;
    getTicket(): Promise<string>;
}
export = VerifyTicket;
