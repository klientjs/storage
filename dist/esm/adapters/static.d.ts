import Storage from '../storage';
import type { StorageValue } from '../storage';
export default class StaticStorage<T = unknown> extends Storage<T> {
    state: StorageValue;
    write(value: T): void;
    read(): T;
    clear(): void;
}
