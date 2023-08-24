var assert = require('assert');

function add(a, b) {
  return a + b;
}

assert(add(1, 2) === 3, "The add() function should return 3 when given the arguments 1 and 2");