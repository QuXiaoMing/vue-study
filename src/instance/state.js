import {observe} from '../reflect/Observer.js';

export function stateMixin(Vue) {
    console.log('TCL: stateMixin -> vm');
}

export function initState(vm) {
    console.log('TCL: initState -> vm', vm);
    initData(vm);
}

export function initData(vm) {
    let data = vm.$options.data;
    data = vm.$data = typeof data === 'function' ? data() : data;
    observe(data);
}
