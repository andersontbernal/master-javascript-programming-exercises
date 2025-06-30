function getSumOfAllElementsAtProperty(obj, key) {
  // Paso 1 y 2: verificar que la propiedad exista y sea un array
  if (!Array.isArray(obj[key])) {
    return 0;
  }

  // Paso 3: verificar que el array no esté vacío
  if (obj[key].length === 0) {
    return 0;
  }

  // Paso 4: sumar todos los elementos del array
  return obj[key].reduce((sum, current) => sum + current, 0);
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
