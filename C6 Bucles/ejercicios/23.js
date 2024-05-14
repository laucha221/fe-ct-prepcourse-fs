function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if(numero <= 1){
    return false;
  }
  var esPrimo = true;
  var divisor = 2;
  do {
    if(numero % divisor === 0 && numero !== divisor){
      esPrimo = false;
      break;
    }
    divisor++;
  } while (divisor <= Math.sqrt(numero));
  return esPrimo;
}

module.exports = esNumeroPrimo;
