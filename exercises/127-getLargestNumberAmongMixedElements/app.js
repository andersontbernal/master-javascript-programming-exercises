function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let largest= null;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (largest === null || arr[i] > largest) {
                largest = arr[i];
            }
        }
    }
    if (largest === null ) {
        return 0;        
    }
    return largest; 
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
