import Storage, { StorageValue } from '../storage';
export declare type LocalStorageOptions = {
    name: string;
};
export default class LocalStorage<T = unknown> extends Storage<T, LocalStorageOptions> {
    read(): StorageValue;
    write(data: StorageValue): void;
    clear(): void;
}
