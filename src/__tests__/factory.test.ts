import StorageFactory, { Storage } from '..';
import StaticStorage from '../adapters/static';

import type { StorageValue } from '../storage';

class CustomStorage extends Storage {
  write(_value: StorageValue): void {
    return;
  }

  read() {
    return {};
  }

  clear() {
    return;
  }
}

test('register', () => {
  StorageFactory.register('custom', CustomStorage);

  const storage = StorageFactory.create('custom');

  expect(storage).toBeInstanceOf(CustomStorage);
});

test('create', () => {
  const storage = StorageFactory.create('static', { test: true });

  expect(storage).toBeInstanceOf(StaticStorage);
  expect(storage.options.test).toBe(true);

  try {
    StorageFactory.create('undefined');
    expect(true).toBe(false);
  } catch (e) {
    expect(e).toBeInstanceOf(Error);
  }

  try {
    StorageFactory.register('invalid', {});
    StorageFactory.create('invalid');
    expect(true).toBe(false);
  } catch (e) {
    expect(e).toBeInstanceOf(Error);
  }
});
