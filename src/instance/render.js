import {mountComponent} from './lifecycle';
import {query} from '../utils/index';

export function renderMixin(Vue) {
    console.log('TCL: renderMixin');
    Vue.prototype.$mount = function(el) {
        return mountComponent(this, el && query(el, this.$document));
    };
}

export function initRender(vm) {}
