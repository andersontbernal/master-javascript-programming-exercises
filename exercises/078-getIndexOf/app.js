// Write your function here
function getIndexOf (car, str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === car) {
            return i;
        }
        
    }
            return - 1;
}
let output = getIndexOf("a", "I am a hacker");
console.log(output);
