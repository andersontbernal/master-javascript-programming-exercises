function filterEvenElements(arr) {
    // your code here
    if (arr.length ===0) return [];
    let result =[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }  
    return result;
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
