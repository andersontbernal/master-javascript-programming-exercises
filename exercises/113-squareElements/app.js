function squareElements(arr) {
  // your code here
  if (arr.length === 0) return [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let squared = arr[i] * arr[i];
    result.push(squared);
  }
    return result;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
