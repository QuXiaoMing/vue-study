import Dep from './Dep';

export default class Watcher {
    constructor(vm, expOrFn, cb, options, isRenderWatcher) {
        console.warn('TCL: Watcher -> constructor -> vm');
        Dep.target = this;
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

    update() {
        console.log('TCL: Watcher -> updated -> updated');
        return this.get();
    }
}
