
// // function saludar(nombre) {
// //     console.log(`¡Hola ${nombre}!`);
// // }

// // saludar("Salvador");

// // //Ejercicio 1
// // let resultado;
// // function calculadora(num1, num2, operacion) {
// //     if (operacion === "+") {
// //         resultado = num1 + num2;
// //         return resultado;
// //     } else if (operacion === "-") {
// //         resultado = num1 - num2;
// //         return resultado;
// //     } else if(operacion === "*"){
// //         resultado = num1 * num2;
// //         return resultado;
// //     } else if(operacion === "/"){
// //         resultado = num1 / num2;
// //         return resultado;
// //     } else{
// //         console.log("Ingrese un operador válido");
// //     }
// // }
// // calculadora(2, 2, "/");
// // console.log(`El resultado de la operación es: ${resultado}`);

// // //Ejercicio 2
// // let cantidadCaracteres;
// // function contarCaracteres(string) {
// //     cantidadCaracteres = string.length;
// //     return cantidadCaracteres;
// // }
// // contarCaracteres("parangaricutirimicuaro");
// // console.log(`La cantidad de caracteres es: ${cantidadCaracteres}`);

// // //Ejercicio 3
// // let pares;
// // function numerosPares(entero) {
// //     for (let i = 0; i < entero; i++) {
// //         if(i % 2 === 0){
// //             pares = i;
// //             console.log(pares);
// //         }
// //     }
// // }
// // numerosPares(8);

// // //Ejercicio 4
// // let resultado = 1;
// // function factorialIterativo(numero) {
// //     for (let i = 2; i <= numero; i++) {
// //       resultado *= i;
// //     }
// //     return resultado;
// // }
  
  
// // factorialIterativo(5);
// // console.log(`El factorial del número ingresado es ${resultado}`);

// // //Ejercicio 5
// // function esPalindromo(cadena) {
// //     cadena = cadena.replace(/ /g, '').toLowerCase();
// //     const cadenaInvertida = cadena.split('').reverse().join('');
// //     return cadena === cadenaInvertida;
// // }

// // let frase = prompt("Ingrese una palabra o frase: ");
  

  
// // if (esPalindromo(frase)) {
// //     console.log(`${frase} es un palíndromo.`);
// // } else {
// //     console.log(`${frase} no es un palíndromo.`);
// // }

// //Desafío
// let alfabeto = "abcdefghijklmnopqrstuvwxyzabcABCDEFGHIJKLMNOPQRSTUVWXYZABC";
// let palabra, a, b, c= "";
// // let coincidencia = false;
// let palabraJoin;


// function cifradoCesar(cadena, desplazamiento) {
//     var letra = "";
//     alfabeto.split('');
    
//     palabra = cadena.split('');

//     for (let i = 0; i < palabra.length; i++) {
//         for (let j = 0; j < alfabeto.length; j++) {
//             a = palabra[i];
//             b = alfabeto[j+desplazamiento];
//             c = alfabeto[j];
//             if (a === c) {
//                 a = b;
//                 letra += a;
//             }
            
           
//         }
        
//     }
    
    
//     console.log(letra);
// }

// let ingresarPalabra = prompt("Ingrese una palabra");
// let ingresarDesplazamiento = parseInt(prompt("Ingrese un desplazamiento"));
// cifradoCesar(ingresarPalabra, ingresarDesplazamiento);
// // cifradoCesar("hola", 3);





// function cifradoCesar(texto, desplazamiento) {
//     // Define un alfabeto en minúsculas y mayúsculas
//     const alfabetoMinusculas = 'abcdefghijklmnopqrstuvwxyz';
//     const alfabetoMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
//     // Crea una función auxiliar para cifrar una letra dada
//     function cifrarLetra(letra, alfabeto, desplazamiento) {
//       const indice = alfabeto.indexOf(letra);
  
//       // Si la letra no está en el alfabeto, la dejamos sin cambios
//       if (indice === -1) {
//         return letra;
//       }
  
//       // Calcula el nuevo índice después del desplazamiento
//       const nuevoIndice = (indice + desplazamiento) % alfabeto.length;
  
//       // Asegúrate de que el nuevo índice no sea negativo
//       const indiceCifrado = nuevoIndice >= 0 ? nuevoIndice : nuevoIndice + alfabeto.length;
  
//       // Devuelve la letra cifrada
//       return alfabeto.charAt(indiceCifrado);
//     }
  
//     // Inicializa una cadena vacía para almacenar el resultado cifrado
//     let resultado = '';
  
//     // Itera sobre cada carácter en el texto de entrada
//     for (let i = 0; i < texto.length; i++) {
//       const caracter = texto[i];
  
//       // Verifica si el carácter es una letra minúscula
//       if (alfabetoMinusculas.includes(caracter)) {
//         resultado += cifrarLetra(caracter, alfabetoMinusculas, desplazamiento);
//       }
//       // Verifica si el carácter es una letra mayúscula
//       else if (alfabetoMayusculas.includes(caracter)) {
//         resultado += cifrarLetra(caracter, alfabetoMayusculas, desplazamiento);
//       }
//       // Si el carácter no es una letra, lo agregamos tal cual al resultado
//       else {
//         resultado += caracter;
//       }
//     }
  
//     return resultado;
//   }
  
//   // Ejemplo de uso:
//   const textoOriginal = prompt("Ingrese una palabra: ");
//   const desplazamiento = parseInt(prompt("Ingrese un desplazamiento:"));
//   const textoCifrado = cifradoCesar(textoOriginal, desplazamiento);
//   console.log(textoCifrado); // Output: "Krod"



//Desafío "Número aleatorio"
var numeroSecreto = Math.floor(Math.random() * 100) + 1;

var respuesta = parseInt(prompt("Adivine el número en el que estoy pensando (del 1 al 100)"));
if (respuesta > 0 && respuesta <= 100) {
    for (let contador = 5; contador > 0; contador--) {
        if (respuesta == numeroSecreto) {
            alert("El número es correcto🥳🥳");
        } else if (respuesta > numeroSecreto) {
            alert("El número es menor a ese");
            alert(`Te quedan ${contador} intentos`);
            respuesta = parseInt(prompt("Adivine el número en el que estoy pensando (del 1 al 100)"));
        } else if (respuesta < numeroSecreto){
            alert("El número es mayor a ese");
            alert(`Te quedan ${contador} intentos`);
            respuesta = parseInt(prompt("Adivine el número en el que estoy pensando (del 1 al 100)"));
        }
    }
    if (respuesta != numeroSecreto) {
        alert(`Se te acabaron las oportunidades, el número era ${numeroSecreto}`);
    }
} else{
    alert("Debe ingresar un número del 1 al 100");
}



