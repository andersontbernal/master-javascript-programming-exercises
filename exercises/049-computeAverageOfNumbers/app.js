// Write your function here
function computeAverageOfNumbers (nums) {
   // return num.length === 0 ? nums.reduce ((sum, num)) => sum + num, 0) / nums.length; 
if (nums.length === 0) {
    return 0; 
    
}

let suma = 0;
for (let i = 0; i < nums.length; i++) {
    suma += nums[i]

}

let promedio = suma / nums.length;

return promedio;
}
