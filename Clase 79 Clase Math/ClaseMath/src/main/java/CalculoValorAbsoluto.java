/*Ejercicio de cálculo del valor absoluto: Escribir un programa que solicite al usuario un número entero
y muestre en pantalla su valor absoluto utilizando el método abs() de la clase Math.
*/

import javax.swing.*;

public class CalculoValorAbsoluto {
    public static void main(String[] args) {

        int valor = Integer.parseInt(JOptionPane.showInputDialog(null, "Ingresa un valor negativo"));
        JOptionPane.showMessageDialog(null, "Valor  ingresado " + valor + " su valor absoluto es: " + Math.abs(valor));
    }
}
