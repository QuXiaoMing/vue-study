export default class Dep {
    constructor() {
        this.subs = [];
    }

    depend() {
        if (Dep.target && !this.subs.includes(Dep.target)) {
            this.subs.push(Dep.target);
        }
    }

    notify() {
        this.subs.forEach(e => e.update());
    }
}
