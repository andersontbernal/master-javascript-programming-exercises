// Write your function here
function findMaxLengthOfThreeWords(word1, word2, word3) {
    return Math.max(word1.length, word2.length, word3.length);// Q of largest words
    
}
let output = findMaxLengthOfThreeWords("a", "be", "see");
console.log(output);
