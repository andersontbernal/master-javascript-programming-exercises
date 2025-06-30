// Write your function here
function getElementsLessThan100AtProperty(obj, key) {

    if (!obj[key] || !Array.isArray(obj[key])) {
        return [];
    }
    
    return obj[key].filter(function(element) {
        return element < 100;
    });
}

let obj = {
  key: [1000, 20, 50, 500]
};
let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]

/*💡 Pistas:
Si el array está vacío, debería retornar un array vacío [].

Si el array no contiene ningún elemento menor a 100, debería retornar un array vacío [].

Si la propiedad en esa key dada no es un array, debería retornar un array vacío [].

Si no hay ninguna propiedad en dicha key, debería retornar un array vacío [].

*/