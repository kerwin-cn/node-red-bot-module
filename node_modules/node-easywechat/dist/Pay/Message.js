"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Message_1 = __importDefault(require("../Core/Message"));
class Message extends Message_1.default {
    getOriginalAttributes() {
        let attributes = {};
        try {
            attributes = JSON.parse(this.originContent);
        }
        catch (e) { }
        return attributes;
    }
    getEventType() {
        let eventType = this.getOriginalAttributes()['event_type'];
        if (typeof eventType !== 'string') {
            throw new Error('Invalid event type.');
        }
        return eventType;
    }
}
;
module.exports = Message;
