function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var elementVistos = new Set();

  for(var i = 0; i < numeros.length; i++){
    if(elementVistos.has(numeros[i])){
      return numeros[i];
    }
    elementVistos.add(numeros[i]);
  }
}

module.exports = encontrarElementoRepetido;