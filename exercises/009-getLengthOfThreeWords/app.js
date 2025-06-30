function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  let words = word1 + word2 + word3;
  return words.length;
}

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
