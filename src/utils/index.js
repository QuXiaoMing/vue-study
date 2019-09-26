export {isObject, set} from 'lodash';

export const query = el => document.querySelector(el);
export const noop = () => {};
export const parseTemplate = (vm, template) => {
    let data = vm.$data;
    let reg = /\{\{(.+?)\}\}/g;
    return template.replace(reg, (a, key) => {
        return data[key] || vm[key];
    });
};
