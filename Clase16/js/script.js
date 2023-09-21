for (let i = 1; i<=10 ; i++){
    console.log("Numero: "+i);
}

let contador = 0;

let number = 10;
while (number > 0) {
    console.log('El valor de la variable number es: ${number}');
    number--;
}

let suma = 0;
let numero;
do {
    numero = prompt("Ingrese un número");
    entero = parseInt(numero);
    suma = suma + entero;
} while (numero > 0);
alert("La suma de los números ingresados es: ${suma}");