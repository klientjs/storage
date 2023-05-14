import Storage from '../storage';
export default class StaticStorage extends Storage {
    constructor() {
        super(...arguments);
        this.state = undefined;
    }
    write(value) {
        this.state = value;
    }
    read() {
        return this.state;
    }
    clear() {
        this.state = undefined;
    }
}
