import Static from './adapters/static';
import CookieStorage from './adapters/cookie';
import LocalStorage from './adapters/local-storage';
export default class StorageFactory {
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
StorageFactory.adapters = {
    static: Static,
    cookie: CookieStorage,
    localStorage: LocalStorage
};
