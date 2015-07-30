var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']


function countWords(inputWords) {
    var count = {};
    var word;

    for(var i = 0; i < inputWords.length; i++) {
        word = inputWords[i];

        if (count[word]) {
            count[word] += 1;
        }
        else {
            count[word] = 1;
        }
    }

    return count;
}

module.exports = countWords

console.log(countWords(inputWords));
