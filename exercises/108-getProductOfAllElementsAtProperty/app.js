function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if (!Array.isArray(obj[key])) {
      return 0;
    }
    if (obj[key].length === 0) {
      return 0;
    }
    return obj[key].reduce((acc, current) => acc * current, 1);
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
