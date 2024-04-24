'use strict';
class Account {
    constructor(appId, secret, token = null, aesKey = null) {
        this.appId = appId;
        this.secret = secret;
        this.token = token;
        this.aesKey = aesKey;
    }
    getAppId() {
        return this.appId;
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
