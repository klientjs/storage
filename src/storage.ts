export type StorageValue = any; // eslint-disable-line @typescript-eslint/no-explicit-any
export type StorageOptions = Record<string, unknown>;

export default abstract class Storage<
  T extends StorageValue = unknown,
  O extends StorageOptions = Record<string, unknown>
> {
  constructor(public readonly options: O) {}
  abstract write(value: T): void;
  abstract read(): T;
  abstract clear(): void;
}
