/*Ejercicio 1 */
function calculadora(num1, num2, operadora) {
    let resultado = 0;
    if (operadora == "+") {
        resultado = num1 + num2;
    } else if (operadora == "-") {
        resultado = num1 - num2;
    } else if (operadora == "*") {
        resultado = num1 * num2;
    } else if (operadora == "/" && num2 != 0) {
        resultado = num1 / num2;
    } else {
        alert("Ingresa una operacion valida");
    }
    return resultado;
}

function datosOperacion() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let operacion = document.getElementById("operacion").value;
    let mensaje = document.getElementById("mensaje1");

    let resultado = calculadora(numero1, numero2, operacion);

    mensaje.textContent = "El resultado es " + resultado;
}

/*Ejercicio 2*/

function datosOperacion2() {
    let texto = document.getElementById("caracteres").value;
    let mensaje = document.getElementById("mensaje2");

    let contar = contarCaracteres(texto);
    mensaje.textContent = "La cantidad de caracteres es de " + contar;
}

function contarCaracteres(texto) {
    return texto.length;
}

/*Ejercicio 3 */

function datosPares() {
    let numeropar = parseInt(document.getElementById("pares").value);
    let mensaje = document.getElementById("mensaje3");

    let par = numerosPares(numeropar);
    mensaje.textContent = "La cantidad de numeros pares es " + par;
}

function numerosPares(numeropar) {
    let cantP = 0;

    for (let i = 1; i <= numeropar; i++) {
        if (i % 2 == 0) {
            cantP++;
        }
    }
    return cantP;
}

/*Ejercicio 4 */

function factorial() {
    let factor = parseInt(document.getElementById("factorial").value);
    let mensaje = document.getElementById("mensaje4");

    let resultadofactorial = 1;

    for (let i = 1; i <= factor; i++) {
        resultadofactorial *= i;
    }
    mensaje.textContent = "El resultado es " + resultadofactorial;
}

/*Ejercicio 5*/

function esPalindromo() {
    let pali = document.getElementById("palindromo").value;
    let mensaje = document.getElementById("mensaje5");

    let minuscula = pali.toLowerCase().replace(/\s/g,'');
    console.log("hola")

    let invertida = minuscula.split('').reverse().join('');

    if (minuscula == invertida) {
        mensaje.textContent = minuscula + " es un palidromo";
    } else {
        mensaje.textContent = "No es un palindromo";
    }
}