import {isObject, set} from '../utils';
import Dep from './Dep';
export function observe(data) {
    return new Observer(data);
}

export class Observer {
    constructor(value) {
        this.value = value;
        this.dep = new Dep();
        set(value, '__ob', this);

        if (isObject(value)) {
            this.walk();
        }
    }

    walk() {
        Object.keys(this.value).forEach(key => {
            defineReactive(this.value, key);
        });
    }
}

export function defineReactive(obj, key, val) {
    const dep = new Dep();
    const property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
        return;
    }

    // cater for pre-defined getter/setters
    const getter = property && property.get;
    const setter = property && property.set;
    console.log('TCL: defineReactive -> setter', setter);
    if ((!getter || setter) && arguments.length === 2) {
        val = obj[key];
    }
    Object.defineProperty(obj, key, {
        get: function() {
            const value = getter ? getter.call(obj) : val;
            console.log('TCL: defineReactive -> get', key, value, Dep.target);
            if (Dep.target) {
                dep.depend();
            }
            return value;
        },
        set: function(newVal) {
            const value = getter ? getter.call(obj) : val;
            console.log('TCL: defineReactive -> value === newVal', value, newVal);
            if (!newVal || value === newVal) return;
            console.log('TCL: defineReactive -> set', key, newVal);
            if (setter) {
                setter.call(obj, newVal);
            } else {
                val = newVal;
            }
            dep.notify();
        },
    });
}
