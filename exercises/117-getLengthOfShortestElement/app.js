function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length === 0) return 0;
    let shortestLength = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortestLength) {
            shortestLength = arr[i].length;
        }
    }
    return shortestLength;
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
