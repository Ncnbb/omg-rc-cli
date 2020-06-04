import { say } from './until';
say();

let a = '123';

const b = '222';

(() => {
    console.log(a)
    console.log(b)
})();

class WhatTheFuck {
    constructor() {
        this.a = 123;
    }

    say() {
        console.log(this.a);
    }
}

const obj = new WhatTheFuck();
console.log(obj);

