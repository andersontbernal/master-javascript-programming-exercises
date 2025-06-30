// Write your function here
function getLastElementOfProperty(obj, key) {
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0) {
        return undefined;
    }
        return obj[key][obj[key].length -1];
}
// regresa el ultimo elemento of key 
// if array is empty = undefined
// if property in array is not array = undefined
// if key hasn't property empty = undefined

let obj = {
  key: [1, 2, 5]
};
let output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5