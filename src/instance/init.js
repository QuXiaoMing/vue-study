import {callHook} from './lifecycle';
import {initState} from './state';
import {initRender} from './render';

let uid = 0;

export function initMixin(Vue) {
    console.log('TCL: initMixin -> Vue');
    Vue.prototype._init = function(options) {
        let vm = this;
        vm._uid = uid++;
        vm.$options = options;

        vm._self = vm;
        // initLifecycle(vm);
        // initEvents(vm);
        // initRender(vm);
        callHook(vm, 'beforeCreate');
        // initInjections(vm); // resolve injections before data/props
        initState(vm);
        // initProvide(vm); // resolve provide after data/props
        callHook(vm, 'created');

        if (vm.$options.el) {
            vm.$mount(vm.$options.el);
        }
    };
}
