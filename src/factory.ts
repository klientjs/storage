import Static from './adapters/static';
import CookieStorage from './adapters/cookie';
import LocalStorage from './adapters/local-storage';

import type Storage from './storage';
import type { StorageOptions } from './storage';

export default class StorageFactory {
  static readonly adapters: Record<string, unknown> = {
    static: Static,
    cookie: CookieStorage,
    localStorage: LocalStorage
  };

  /**
   * Build a new instance of a Storage.
   */
  static create<T = Storage<unknown>, O extends StorageOptions = StorageOptions>(
    alias: string,
    options?: O
  ): Storage<T> {
    const StorageClass = StorageFactory.adapters[alias] as { new (o: StorageOptions): Storage<T, O> };

    if (!StorageClass) {
      throw new Error(`Security storage "${alias}" is not defined.`);
    }

    try {
      return new StorageClass(options || {});
    } catch (e) {
      throw new Error(`Security storage "${alias}" is misconfigured, expect class.`);
    }
  }

  /**
   * Register new usable storage adapters.
   */
  static register(alias: string, adapter: unknown): void {
    StorageFactory.adapters[alias] = adapter;
  }
}
