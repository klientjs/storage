import Storage from '../storage';
export default class CookieStorage extends Storage {
    read() {
        const name = `${this.options.name}=`;
        const cookieData = decodeURIComponent(document.cookie).split(';');
        for (const cookie of cookieData) {
            const data = cookie.trim();
            if (data.indexOf(name) === 0) {
                return JSON.parse(data.substring(name.length, data.length));
            }
        }
        return undefined;
    }
    write(data) {
        document.cookie = this.build(data);
    }
    clear() {
        this.write(undefined);
    }
    build(data) {
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
