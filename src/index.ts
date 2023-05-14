import Factory from './factory';

// Adapters
export type { default as StaticAdapter } from './adapters/static';
export type { default as LocalStorageAdapter } from './adapters/local-storage';
export type { default as CookieAdapter } from './adapters/cookie';

// Adapters options
export type { CookieStorageOptions } from './adapters/cookie';
export type { LocalStorageOptions } from './adapters/local-storage';
export type { StorageOptions } from './storage';

// Abstract storage class
export { default as Storage } from './storage';

// Factory
export default Factory;
