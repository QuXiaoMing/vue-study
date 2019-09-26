export function stateMixin(Vue) {
    console.log('TCL: stateMixin -> vm');
}
export function initState(vm) {
    console.log('TCL: initState -> vm', vm);
    vm.$data = vm.$options.data();
}
