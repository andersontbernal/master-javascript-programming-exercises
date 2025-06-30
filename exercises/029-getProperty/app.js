function getProperty(obj, key) {
  // your code here
  return obj[key];  
}

let car = {
  model: "toyota",
  color: "red",
  year: 2020
};

let output = getProperty(car, "model");
console.log(output);

let colorOutput = getProperty(car, "color");
console.log(colorOutput);

let yearOutput = getProperty(car, "year");
console.log(yearOutput);