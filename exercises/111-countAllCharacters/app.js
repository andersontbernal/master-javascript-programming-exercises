// Write your function here
function countAllCharacters(str) {
    let result = {};
    for (let i = 0; i <str.length; i++) {
        let char = str[i];
        if (result[char]) {
            result[char]++;
        }   else {
            result[char] = 1;
        }
    }
    return result;
};
let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}