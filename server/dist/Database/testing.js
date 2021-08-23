"use strict";
const options = { a: 1, b: 2 };
const moreOptions = { c: 3 };
Object.assign(moreOptions, options);
console.log(options);
console.log(moreOptions);
