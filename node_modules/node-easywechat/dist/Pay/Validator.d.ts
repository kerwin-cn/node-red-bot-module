import ValidatorInterface from "./Contracts/ValidatorInterface";
import MessageInterface from "../Core/Http/Contracts/MessageInterface";
import MerchantInterface from "./Contracts/MerchantInterface";
import Message from "./Message";
declare class Validator implements ValidatorInterface {
    protected merchant: MerchantInterface;
    static MAX_ALLOWED_CLOCK_OFFSET: number;
    static HEADER_TIMESTAMP: string;
    static HEADER_NONCE: string;
    static HEADER_SERIAL: string;
    static HEADER_SIGNATURE: string;
    constructor(merchant: MerchantInterface);
    validate(request: MessageInterface): Promise<boolean>;
    validateV2(message: Message): boolean;
}
export = Validator;
