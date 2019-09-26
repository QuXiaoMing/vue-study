import {observe, defineComputed} from '../reflect/Observer.js';
import {noop} from '../utils';
import Watcher from '../reflect/Watcher';

export function stateMixin(Vue) {
    console.log('TCL: stateMixin -> vm');
}

export function initState(vm) {
    console.log('TCL: initState -> vm', vm);
    initData(vm);
}
export function proxy(vm, data) {
    Object.keys(data).forEach(key => {
        Object.defineProperty(vm, key, {
            configurable: false,
            enumerable: false,
            get: function() {
                return vm.$data[key];
            },
            set: function(value) {
                return (vm.$data[key] = value);
            },
        });
    });
}
export function initData(vm) {
    let data = vm.$options.data;
    data = vm.$data = typeof data === 'function' ? data() : data;
    console.error('TCL: initData -> vm.$data', vm.$data);
    observe(data);
    proxy(vm, data);
    initComputed(vm);
}

export function initComputed(vm) {
    const watchers = (vm._computedWatchers = Object.create(null));
    vm._computedWatcheds = Object.create(null);
    let computed = vm.$options.computed;

    Object.keys(computed).forEach(key => {
        const userDef = computed[key];
        const getter = typeof userDef === 'function' ? userDef : userDef.get;
        const setter = typeof userDef === 'function' ? userDef : userDef.get;
        watchers[key] = new Watcher(vm, getter || noop, noop);
        defineComputed(vm, key, getter, setter);
    });
}
