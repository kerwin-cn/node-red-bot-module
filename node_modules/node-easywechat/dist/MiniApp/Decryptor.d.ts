declare class Decryptor {
    static decrypt(sessionKey: string, iv: string, ciphertext: string): Record<string, any>;
}
export = Decryptor;
