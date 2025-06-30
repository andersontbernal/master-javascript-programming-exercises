function computeSumOfAllElements(arr) {
  // your code here
 let totalSum = 0;
 for (let i = 0; i < arr.length; i++) {
  totalSum += arr[i]; 
    
 } 
 return totalSum;
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
