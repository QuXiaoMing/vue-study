export default class Watcher {
    constructor(vm, expOrFn, cb, options, isRenderWatcher) {
        if (typeof expOrFn === 'function') {
            this.getter = expOrFn;
        } else {
            // TODO 解析表达式
        }
        this.value = this.get();
    }

    get() {
        const vm = this.vm;
        return this.getter.call(vm, vm);
    }
}
