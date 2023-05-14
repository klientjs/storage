"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = require("../storage");
class StaticStorage extends storage_1.default {
    constructor() {
        super(...arguments);
        this.state = undefined;
    }
    write(value) {
        this.state = value;
    }
    read() {
        return this.state;
    }
    clear() {
        this.state = undefined;
    }
}
exports.default = StaticStorage;
