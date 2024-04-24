'use strict';
class Account {
    constructor(corpId, providerSecret, suiteId, suiteSecret, token = null, aesKey = null) {
        this.corpId = corpId;
        this.providerSecret = providerSecret;
        this.suiteId = suiteId;
        this.suiteSecret = suiteSecret;
        this.token = token;
        this.aesKey = aesKey;
    }
    getCorpId() {
        return this.corpId;
    }
    getProviderSecret() {
        return this.providerSecret;
    }
    getSuiteId() {
        return this.suiteId;
    }
    getSuiteSecret() {
        return this.suiteSecret;
    }
    getToken() {
        return this.token;
    }
    getAesKey() {
        return this.aesKey;
    }
}
module.exports = Account;
