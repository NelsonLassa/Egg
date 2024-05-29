/*
Suma de elementos: Escribir un programa en el cual se cree una
variable de tipo array que contiene 3 elementos de tipo entero
e imprimir por consola la suma de todos sus elementos, sin usar el bucle for.
 */


import javax.swing.*;

public class SumaDeElementos {
    public static void main(String[] args) {

        int[] array1 = {4, 6, 8};
        int suma = array1[0] + array1[1] + array1[2];
        JOptionPane.showMessageDialog(null, "La suma es: " + suma);
        float promedio = suma / (array1.length);
        JOptionPane.showMessageDialog(null, "El promedio es: " + promedio);
    }
}
