'use strict';
class Account {
    constructor(corpId, secret, token = null, aesKey = null) {
        this.corpId = corpId;
        this.secret = secret;
        this.token = token;
        this.aesKey = aesKey;
    }
    getCorpId() {
        return this.corpId;
    }
    getSecret() {
        if (null === this.secret) {
            throw new Error("No secret configured.");
        }
        return this.secret;
    }
    getToken() {
        return this.token;
    }
    getAesKey() {
        return this.aesKey;
    }
}
module.exports = Account;
