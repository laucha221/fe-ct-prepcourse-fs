function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a > b) {
    var aux = b;
    b = a;
    a = aux;
  }
  var producto = 1;
  for(var i = a; i <= b; i++){
    producto *= i;
  }
  return producto === -0 ? 0 : producto
}

module.exports = productoEntreNúmeros;