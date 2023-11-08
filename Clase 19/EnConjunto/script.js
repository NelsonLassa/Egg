function cifradoCesar(texto, desplazamiento) {
  // Define un alfabeto en minúsculas y mayúsculas
  const alfabetoMinusculas = 'abcdefghijklmnopqrstuvwxyz';
  const alfabetoMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Crea una función auxiliar para cifrar una letra dada
  function cifrarLetra(letra, alfabeto, desplazamiento) {
    const indice = alfabeto.indexOf(letra);

    // Si la letra no está en el alfabeto, la dejamos sin cambios
    if (indice === -1) {
      return letra;
    }

    // Calcula el nuevo índice después del desplazamiento
    const nuevoIndice = (indice + desplazamiento) % alfabeto.length;

    // Asegúrate de que el nuevo índice no sea negativo
    const indiceCifrado = nuevoIndice >= 0 ? nuevoIndice : nuevoIndice + alfabeto.length;

    // Devuelve la letra cifrada
    return alfabeto.charAt(indiceCifrado);
  }

  // Inicializa una cadena vacía para almacenar el resultado cifrado
  let resultado = '';

  // Itera sobre cada carácter en el texto de entrada
  for (let i = 0; i < texto.length; i++) {
    const caracter = texto[i];

    // Verifica si el carácter es una letra minúscula
    if (alfabetoMinusculas.includes(caracter)) {
      resultado += cifrarLetra(caracter, alfabetoMinusculas, desplazamiento);
    }
    // Verifica si el carácter es una letra mayúscula
    else if (alfabetoMayusculas.includes(caracter)) {
      resultado += cifrarLetra(caracter, alfabetoMayusculas, desplazamiento);
    }
    // Si el carácter no es una letra, lo agregamos tal cual al resultado
    else {
      resultado += caracter;
    }
  }

  return resultado;
}

// Ejemplo de uso:
const textoOriginal = prompt("Ingrese una palabra: ");
const desplazamiento = 3;
const textoCifrado = cifradoCesar(textoOriginal, desplazamiento);
console.log(textoCifrado); // Output: "Krod"

  