// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    if (!obj[key] || !Array.isArray(obj[key])) {
        return [];
    }
    
    return obj[key].filter(function(word) {
        return word.length % 2 !== 0;
    });
}

let obj = {
  key: ['It', 'has', 'some', 'words']
};
let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']