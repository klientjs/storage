import Storage, { StorageValue } from '../storage';

export type LocalStorageOptions = {
  name: string;
};

/**
 * Manage an object in localStorage object.
 */
export default class LocalStorage<T = unknown> extends Storage<T, LocalStorageOptions> {
  read(): StorageValue {
    const state = localStorage.getItem(this.options.name);

    if (typeof state !== 'string') {
      return undefined;
    }

    return JSON.parse(state);
  }

  write(data: StorageValue) {
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
