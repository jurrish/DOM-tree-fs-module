'use strict';

let fs = require('fs');
let tree = require('./tree-constructor.js');


//get file and modify to utf8
let contents = fs.readFileSync('../resources/mock-html.html', 'utf8')
  .trim()
  .split('\n');

console.log(contents);
//have access to a string, now split it up by parent/child relationships and store in a tree?
