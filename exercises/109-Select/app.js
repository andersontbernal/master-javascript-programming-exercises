// Write your function here
function select(keys, obj) {
    let result = {};
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }
    return result;    
}