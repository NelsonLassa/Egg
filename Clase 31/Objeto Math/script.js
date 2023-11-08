/* Ejercicio: Objeto Math */

//Math.abs(x): Devuelve el valor absoluto de un numero(Sin considerar su signo)
let numero = -5;
const valorAbsoluto = Math.abs(numero);
document.write("El valor absoluto es: " + valorAbsoluto + "<br>");

//Math.ceil(x): Redondea 'x' al entero mas grande
numero = 5.7;
const valorMayor = Math.ceil(numero)
document.write("El valor redondeado al mas grande es: " + valorMayor + "<br>");

//Math.floor(x): Redondea 'x' al entero mas pequeño
const valorMenor = Math.floor(numero);
document.write("El valor redondeado al mas pequeño es: " + valorMenor + "<br>");

//Math.round(x): Redondea 'x' al entero mas cercano
numero = 5.4;
const redondeado = Math.round(numero);
document.write("El valor redondeado mas cercano es: " + redondeado + "<br>");

//Math.max(x1,x2,...,xn): devuelve el valor mas grande de los argumentos

const maximo = Math.max(1, 45, 12, 32, 40);
document.write("El valor mas grande es: " + maximo + "<br>");

//Math.mix(x1,x2,...,xn): devuelve el valor mas pequeño de los argumentos
const minimo = Math.min(1, 45, 12, 32, 40);
document.write("El valor mas pequeño es: " + minimo + "<br>");

//Math.random(): genera un numero decimal aleatorio entre el 0 (incluido) 
//y el 1 (excluido)

const numeroAleatorio = Math.ceil(Math.random() * 40) + 10;
document.write("numero aleatorio: " + numeroAleatorio + "<br>")
posicion = [20, 40, 60, 80]
for(let i = 0 ; i<100; i++){
    const numeros = Math.floor(Math.random()*100);
    document.write(numeros + "-");
    if(posicion.includes(i)){
        document.write("<br>")
    }
}





