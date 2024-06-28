function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var sumando = 0;

  for(var i = 0; i < arrayOfNums.length; i++) {
    sumando += arrayOfNums[i];
  }
  return sumando;
}

module.exports = agregarNumeros;
