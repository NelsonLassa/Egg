/*Ejercicio de redondeo de números: Escribir un programa que solicite al usuario
 un número decimal y muestre en pantalla su valor redondeado
 utilizando el método round() de la clase Math.
*/


import javax.swing.*;

public class RedondeoNumeros {
    public static void main(String[] args) {
        float ingreso = Float.parseFloat(JOptionPane.showInputDialog(null, "Ingresa un valor decimal ej: 5.5 "));
        int redondeo = Math.round(ingreso);
        JOptionPane.showMessageDialog(null, "El valor redondeado es: " + redondeo);
    }
}
