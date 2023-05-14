import type Storage from './storage';
import type { StorageOptions } from './storage';
export default class StorageFactory {
    static readonly adapters: Record<string, unknown>;
    static create<T = Storage<unknown>, O extends StorageOptions = StorageOptions>(alias: string, options?: O): Storage<T>;
    static register(alias: string, adapter: unknown): void;
}
