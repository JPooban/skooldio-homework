'use strict';

const encode = require('./lib/encode');

const encoded = encode(process.argv[2]);
console.log(encoded);