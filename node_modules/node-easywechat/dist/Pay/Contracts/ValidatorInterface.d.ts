import Request from "../../Core/Http/Request";
import Message from "../Message";
declare abstract class ValidatorInterface {
    /**
     * 验证请求是否正确
     */
    validate(request: Request): Promise<boolean>;
    /**
     * 验证请求是否正确（v2）
     */
    validateV2(message: Message): boolean;
}
export = ValidatorInterface;
