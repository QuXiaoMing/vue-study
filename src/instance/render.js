import {mountComponent} from './lifecycle';
import {query, parseTemplate} from '../utils/index';

export function renderMixin(Vue) {
    Vue.prototype.$mount = function(el) {
        return mountComponent(this, el && query(el, this.$document));
    };

    Vue.prototype._render = function() {
        let vm = this;
        let el = vm.$el;
        el.innerHTML = parseTemplate(vm, vm.$options.template);
    };
}

export function initRender(vm) {}
