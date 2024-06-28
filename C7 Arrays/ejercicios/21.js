function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var mesesSeparados = [];

  for(var i = 0; i < array.length; i++){
    if(mesesSeparados.includes(array[i])) continue;
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      mesesSeparados.push(array[i]);
    }
  }
  return mesesSeparados.length === 3 ? mesesSeparados : "No se encontraron los meses pedidos";
}

module.exports = mesesDelAño;
