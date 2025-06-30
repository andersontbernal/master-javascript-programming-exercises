function addArrayProperty(obj, key, arr) {
  // Add your code after this line
  obj[key] = arr;  
  return obj
}
let myObj = {};
let myArray =[1,3];

addArrayProperty(myObj, "MyProperty", myArray);

console.log(myObj);
console.log(myObj.myProperty);
