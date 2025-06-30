function removeArrayValues(obj) {
    // your code here
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            delete obj[key];
        }
    }
  
}

let obj = {
    a: [1, 2, 4],
    b: 2, 
    c: ["h1", "there"]
}
removeArrayValues(obj);
console.log(obj);