/**
 * @jest-environment jsdom
 */

import CookieStorage from '../../src/adapters/cookie';

const state = { test: true };

test('constructor', () => {
  const storage = new CookieStorage({ name: 'test' });
  expect(storage).toBeInstanceOf(CookieStorage);
  expect(storage.options.name).toBe('test');
});

test('writeReadClear', () => {
  const storage = new CookieStorage({ name: 'test' });

  expect(storage.read()).toBe(undefined);

  storage.write(state);

  expect(storage.read()?.test).toBe(true);

  storage.clear();

  expect(storage.read()).toBe(undefined);

  storage.write(state);

  expect(storage.read()?.test).toBe(true);

  storage.write(undefined);

  expect(storage.read()).toBe(undefined);
});

test('write', () => {
  let storage = new CookieStorage({ name: 'test' });

  storage.write(state);

  expect(decodeURIComponent(document.cookie).split(';')[0]).toBe('test={"test":true}');

  storage.clear();

  expect(decodeURIComponent(document.cookie)).toBe('');

  storage = new CookieStorage({
    name: 'test',
    domain: 'localhost',
    path: '/',
    expiration: 120
  });

  const spyCookie = jest.fn();

  jest.spyOn(document, 'cookie', 'set').mockImplementation((cookie) => {
    spyCookie(cookie);
    return cookie;
  });

  storage.write(state);

  expect(spyCookie).toHaveBeenCalledWith('test={"test":true}; domain=localhost; path=/; max-age=120');
});
