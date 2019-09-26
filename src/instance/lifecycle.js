import Watcher from '../reflect/Watcher.js';
import {noop} from '../utils';
export function lifecycleMixin(vm) {
    console.log('TCL: lifecycleMixin -> vm');
}
export function callHook(vm, hook) {
    console.log('TCL: callHook -> hook', hook);
}
export function mountComponent(vm, el) {
    console.log('TCL: mountComponent -> mountComponent', el);
    callHook(vm, 'beforeMounted');
    vm.$el = el;
    let updateComponent = () => vm._render();
    vm._watcher = new Watcher(
        vm,
        updateComponent,
        noop,
        {
            before() {
                if (vm._isMounted && !vm._isDestroyed) {
                    callHook(vm, 'beforeUpdate');
                }
            },
        },
        true
    );
}
