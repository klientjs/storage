import Storage from '../storage';

import type { StorageValue } from '../storage';

/**
 * Manage an object in static memory.
 */
export default class StaticStorage<T = unknown> extends Storage<T> {
  state: StorageValue = undefined;

  write(value: T) {
    this.state = value;
  }

  read(): T {
    return this.state;
  }

  clear() {
    this.state = undefined;
  }
}
