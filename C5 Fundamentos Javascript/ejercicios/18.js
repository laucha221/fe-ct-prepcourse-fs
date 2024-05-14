function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  switch (letra.toLowerCase()) {
    case 'a':
      return "Es vocal";
    case 'e':
      return "Es vocal";
    case 'i':
      return "Es vocal";
    case 'o':
      return "Es vocal";
    case 'u':
      return "Es vocal";
    default:
      return "Dato incorrecto";
  }

}

module.exports = esVocal;
