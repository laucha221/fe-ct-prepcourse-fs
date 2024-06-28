function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  var string = [str1, str2, str3].filter(s => s !== '');

  var maxlength = Math.max(...string.map(s => s.length))

  var resultado = '';

  for(var i = 0; i < maxlength; i++){
    for(var s of string){
      if(i < s.length){
        resultado += s[i];
      }
    }
  }
  return resultado;
}

module.exports = combine;