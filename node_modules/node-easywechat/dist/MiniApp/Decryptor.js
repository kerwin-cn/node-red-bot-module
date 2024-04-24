'use strict';
const AES_1 = require("../Core/Support/AES");
class Decryptor {
    static decrypt(sessionKey, iv, ciphertext) {
        let decrypted = null;
        try {
            // 解密
            decrypted = AES_1.AES.decrypt(Buffer.from(ciphertext, 'base64'), Buffer.from(sessionKey, 'base64'), Buffer.from(iv, 'base64'), true, 'aes-128-cbc').toString('utf8');
            decrypted = JSON.parse(decrypted);
            if (!decrypted || typeof decrypted !== 'object') {
                throw new Error('The given payload is invalid.');
            }
        }
        catch (e) {
            throw new Error(`Fail to decrypt data: ${e.message}`);
        }
        return decrypted;
    }
}
module.exports = Decryptor;
