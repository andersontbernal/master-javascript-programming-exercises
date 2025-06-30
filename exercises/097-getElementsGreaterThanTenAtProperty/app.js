// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {

    if (!obj[key] || !Array.isArray(obj[key])) {
        return [];
    }
    
    return obj[key].filter(function(element) {
        return element > 10;
    });
}

let obj = {
  key: [1, 20, 30]
};
let output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]