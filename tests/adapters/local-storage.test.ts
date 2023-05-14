/**
 * @jest-environment jsdom
 */

import LocalStorage from '../../src/adapters/local-storage';

test('constructor', () => {
  const storage = new LocalStorage({ name: 'test' });
  expect(storage).toBeInstanceOf(LocalStorage);
  expect(storage.options.name).toBe('test');
});

test('writeReadClear', () => {
  const storage = new LocalStorage({ name: 'test' });
  const state = { test: true };

  expect(storage.read()).toBe(undefined);
  expect(localStorage.getItem('test')).toBeNull();

  storage.write(state);

  expect(storage.read()?.test).toBe(true);
  expect(localStorage.getItem('test')).toBe(JSON.stringify(state));

  storage.clear();

  expect(storage.read()).toBe(undefined);
  expect(localStorage.getItem('test')).toBeNull();

  storage.write(state);

  expect(storage.read()?.test).toBe(true);
  expect(localStorage.getItem('test')).toBe(JSON.stringify(state));

  storage.write(undefined);

  expect(storage.read()).toBe(undefined);
  expect(localStorage.getItem('test')).toBeNull();
});
