"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const static_1 = require("./adapters/static");
const cookie_1 = require("./adapters/cookie");
const local_storage_1 = require("./adapters/local-storage");
class StorageFactory {
    static create(alias, options) {
        const StorageClass = StorageFactory.adapters[alias];
        if (!StorageClass) {
            throw new Error(`Security storage "${alias}" is not defined.`);
        }
        try {
            return new StorageClass(options || {});
        }
        catch (e) {
            throw new Error(`Security storage "${alias}" is misconfigured, expect class.`);
        }
    }
    static register(alias, adapter) {
        StorageFactory.adapters[alias] = adapter;
    }
}
exports.default = StorageFactory;
StorageFactory.adapters = {
    static: static_1.default,
    cookie: cookie_1.default,
    localStorage: local_storage_1.default
};
