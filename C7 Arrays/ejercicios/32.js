function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  var textoLimpio = string.replace(/\s+/g, '').toLowerCase();
  
  var textoInvertido = textoLimpio.split('').reverse().join('');

  return textoLimpio === textoInvertido;
}

module.exports = esPalindromo;