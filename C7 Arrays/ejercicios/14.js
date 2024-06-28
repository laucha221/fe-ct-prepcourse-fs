function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  return array.filter(num => num > 10).length;
 
 
 
 
 
 
 
  // return array.reduce((contador, Elementos) => {
  //   return Elementos > 10 ? contador + 1 : contador;  
  // }, 0);
}

module.exports = contarElementosMayoresA10;
