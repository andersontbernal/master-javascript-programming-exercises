// Write your function here
function findMinLengthOfThreeWords(word1, word2, word3) {
    return Math.min(word1.length, word2.length, word3.length);// letters of shortest word
}
let output = findMinLengthOfThreeWords("a", "be", "see");
console.log(output);
