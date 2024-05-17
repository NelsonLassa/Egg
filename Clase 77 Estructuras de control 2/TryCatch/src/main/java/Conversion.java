/*  Ejercicio de conversión de cadena a entero: Escribe un programa que solicite al usuario una cadena de caracteres
    que represente un número entero. Utiliza el método Integer.parseInt() para convertir la cadena a un número entero.
    Utiliza un bloque "try-catch" para manejar la excepción en caso de que la cadena ingresada no pueda ser convertida
    a un número entero. En caso de que se produzca la excepción, muestra un mensaje adecuado en pantalla.
 */

import java.util.Scanner;

public class Conversion {

    public static void main(String[] args) {
        // Clase Scanner
        Scanner entrada = new Scanner(System.in);
        System.out.print("Ingresa un numero: ");
        try {
            String numeroString = entrada.next();
            System.out.println("numeroString = " + numeroString instanceof String);
            int numero = Integer.parseInt(numeroString);
            System.out.println( numero instanceof Integer );
        }catch (Exception error){
            System.out.println("Error dado: "+ error.getMessage());
        }
    }
}
