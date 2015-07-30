
var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce(function(acc, num) {
    return acc + num;
}, 0);

console.log(sum);
