function countCharacter(str, char) {
    // your code here
    let count = 0;
    for (let i of str) {
        if (i === char) {
            count++;
        }
    }
    return count;
    
}

let output = countCharacter('I am a hacker', 'e');
console.log(output); // --> 3
