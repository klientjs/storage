import Storage, { StorageValue } from '../storage';

export type CookieStorageOptions = {
  name: string;
  domain?: string;
  path?: string;
  expiration?: number; // in seconds
};

/**
 * Manage an object in a cookie.
 */
export default class CookieStorage<T = unknown> extends Storage<T, CookieStorageOptions> {
  read(): StorageValue {
    const name = `${this.options.name}=`;
    const cookieData = decodeURIComponent(document.cookie).split(';');

    // eslint-disable-next-line no-restricted-syntax
    for (const cookie of cookieData) {
      const data = cookie.trim();

      if (data.indexOf(name) === 0) {
        return JSON.parse(data.substring(name.length, data.length));
      }
    }

    return undefined;
  }

  write(data: StorageValue) {
    document.cookie = this.build(data);
  }

  clear() {
    this.write(undefined);
  }

  private build(data: unknown): string {
    const { name, domain, path, expiration } = this.options;

    const exp = data === undefined ? '0' : expiration;

    let cookie = `${name}=`;

    if (data !== undefined) {
      cookie += `${JSON.stringify(data)}`;
    }

    cookie += domain ? `; domain=${domain}` : '';
    cookie += path ? `; path=${path}` : '';
    cookie += exp ? `; max-age=${exp}` : '';

    return cookie;
  }
}
