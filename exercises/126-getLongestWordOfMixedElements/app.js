function getLongestWordOfMixedElements(arr) {
    // your code here
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
                  if ( arr[i].length > longest.length){
                    longest = arr[i]
                }
            }
        }
        return longest;
    }


let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
