import StaticStorage from '../../adapters/static';

test('constructor', () => expect(new StaticStorage({})).toBeInstanceOf(StaticStorage));

test('writeReadClear', () => {
  const storage = new StaticStorage<{ test: boolean } | undefined>({});

  expect(storage.read()).toBe(undefined);

  storage.write({ test: true });

  expect(storage.read()?.test).toBe(true);

  storage.clear();

  expect(storage.read()).toBe(undefined);
});
