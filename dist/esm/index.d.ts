import Factory from './factory';
export type { default as StaticAdapter } from './adapters/static';
export type { default as LocalStorageAdapter } from './adapters/local-storage';
export type { default as CookieAdapter } from './adapters/cookie';
export type { CookieStorageOptions } from './adapters/cookie';
export type { LocalStorageOptions } from './adapters/local-storage';
export type { StorageOptions } from './storage';
export { default as Storage } from './storage';
export default Factory;
