function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  switch (Math.sign(num)) {
    case 1:
      return "Es positivo";
    case -1:
      return "Es negativo";
    case 0:
      return false;    
  }
}

module.exports = esPositivo;