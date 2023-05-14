import Storage from '../storage';
export default class LocalStorage extends Storage {
    read() {
        const state = localStorage.getItem(this.options.name);
        if (typeof state !== 'string') {
            return undefined;
        }
        return JSON.parse(state);
    }
    write(data) {
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
