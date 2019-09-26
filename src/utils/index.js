export {isObject, set} from 'lodash';

export const query = el => document.querySelector(el);
export const noop = () => {};
export const parseTemplate = (data, template) => {
    let reg = /\{\{(.+?)\}\}/g;
    return template.replace(reg, (a, key) => {
        return data[key];
    });
};
