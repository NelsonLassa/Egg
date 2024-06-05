/*
Número de dígitos: Escribe un programa que le pida al usuario un número entero y utilice un bucle while para
calcular el número de dígitos de ese número. Por ejemplo, el número 4578 tiene 4 dígitos
(pensar en la lógica para el 0 que debe devolver que tiene una cifra y también para que se cuenten las cifras de números negativos).
*/


import javax.swing.*;

public class NumeroDigitos {
    public static void main(String[] args) {
        int numeroEntero = Integer.parseInt(JOptionPane.showInputDialog(null,"Ingrese un número entero"));
        int cifras = 0;
        while (numeroEntero > 0) {
            numeroEntero= numeroEntero/10;
            cifras++;
        }
        JOptionPane.showMessageDialog(null, "El número ingresado tiene "+cifras+" cifras.");
    }
}
