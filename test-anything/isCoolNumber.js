var assert = require('assert');

var modulePath = process.argv[2];
var isCoolNumber = require(modulePath);

// TODO Use isCoolNumber;
assert.equal(isCoolNumber(42), true, '42 should be true');
