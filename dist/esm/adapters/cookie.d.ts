import Storage, { StorageValue } from '../storage';
export declare type CookieStorageOptions = {
    name: string;
    domain?: string;
    path?: string;
    expiration?: number;
};
export default class CookieStorage<T = unknown> extends Storage<T, CookieStorageOptions> {
    read(): StorageValue;
    write(data: StorageValue): void;
    clear(): void;
    private build;
}
