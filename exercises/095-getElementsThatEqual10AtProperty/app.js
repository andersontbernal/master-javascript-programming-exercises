function getElementsThatEqual10AtProperty(obj, key) {
    
    if (!obj[key] || !Array.isArray(obj[key])) {
        return [];
    }

    return obj[key].filter(function(element) {
        return element === 10;
    });
}


let obj = {
  key: [1000, 10, 50, 10]
};
let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]