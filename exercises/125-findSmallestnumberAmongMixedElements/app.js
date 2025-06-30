function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let smallest = null;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (smallest === null || arr[i] < smallest) {
        smallest = arr[i];
      }
    }
  }
  if (smallest === null){
    return 0; 
  }
  return smallest;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
