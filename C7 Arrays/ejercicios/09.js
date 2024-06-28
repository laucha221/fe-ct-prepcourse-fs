function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   const aleatorio = Math.floor(Math.random() * array.length);
   return array[aleatorio];

}

module.exports = obtenerElementoAleatorio;
