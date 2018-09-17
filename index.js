#!/usr/bin/env node

const init = require('./init');
const push = require('./push');

(process.argv[2] == "init") ? init.init() : push.push();