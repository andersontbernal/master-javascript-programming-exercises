function getSmallestElementAtProperty(obj, key) {
    // your code here
  if (!Array.isArray(obj[key]) || obj[key].length === 0) {
    return [];
  }
  let smallest = Math.min(...obj[key]);
  return smallest;
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
