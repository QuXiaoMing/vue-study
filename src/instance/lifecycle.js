export function lifecycleMixin(vm) {
    console.log('TCL: lifecycleMixin -> vm', vm);
}
export function callHook(vm, hook) {
    console.log('TCL: callHook -> hook', hook);
}
export function mountComponent(vm, el) {
    console.log('TCL: mountComponent -> mountComponent', el);
}
