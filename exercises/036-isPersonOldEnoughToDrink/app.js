function isPersonOldEnoughToDrink(person) {
  // Add your code after this line
  return person.age >= 21;
}

let obj = {
  age: 21
};

let output = isPersonOldEnoughToDrink(obj);
console.log(output);

