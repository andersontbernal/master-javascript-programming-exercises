// Write your function here
function removeElement(array, param) {
    return array.filter(function(item) {
        return item !== param;
    });
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]