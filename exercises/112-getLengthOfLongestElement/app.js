function getLengthOfLongestElement(arr) {
    // Your code here
    if (arr.length === 0) return 0;
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentLength = arr[i].length;
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }
    return maxLength;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
