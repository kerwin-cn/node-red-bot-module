import HasAttributesMixin from "../Core/Mixins/HasAttributesMixin";
declare class Authorization {
    constructor(attributes?: Record<string, any>);
    /**
     * 获取corpid
     * @returns
     */
    getCorpId(): string;
}
interface Authorization extends HasAttributesMixin {
}
export = Authorization;
