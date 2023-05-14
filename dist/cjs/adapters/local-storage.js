"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = require("../storage");
class LocalStorage extends storage_1.default {
    read() {
        const state = localStorage.getItem(this.options.name);
        if (typeof state !== 'string') {
            return undefined;
        }
        return JSON.parse(state);
    }
    write(data) {
        const { name } = this.options;
        if (data === undefined) {
            localStorage.removeItem(name);
            return;
        }
        localStorage.setItem(name, JSON.stringify(data));
    }
    clear() {
        this.write(undefined);
    }
}
exports.default = LocalStorage;
