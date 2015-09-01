var test = require('tape');

var repeatPath = process.argv[2];
var repeatCallback = require(repeatPath);

test('repeats the right number of times', function(t) {
    t.plan(9);

    repeatCallback(9, function() {
        // TODO!
    });
})
