export declare type StorageValue = any;
export declare type StorageOptions = Record<string, unknown>;
export default abstract class Storage<T extends StorageValue = unknown, O extends StorageOptions = Record<string, unknown>> {
    readonly options: O;
    constructor(options: O);
    abstract write(value: T): void;
    abstract read(): T;
    abstract clear(): void;
}
