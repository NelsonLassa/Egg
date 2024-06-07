/*
Ordenar en forma descendente:Escribir un programa en el cual se declare una variable array que contenga 10
elementos de tipo entero,inicializar el arreglo con valores aleatorios entre 1 y 100,imprimir por consola
el arreglo inicial y luego ordenar el arreglo de enteros en forma descendente utilizando el método Arrays.sort().
y luego imprimirlos ordenados en la consola.
 */
import javax.swing.*;
import java.util.Arrays;
import java.util.Collections;
import java.util.Random;

public class OrdenarFormaDescendente {
    public static void main(String[] args) {
        Integer[] muestra = new  Integer[10];
        Random victor = new Random();

        for (int i = 0; i < muestra.length; i++) {
            muestra[i] = victor.nextInt(100) + 1;
        }
        JOptionPane.showMessageDialog(null, "Este es el Array creado con VICTOR: " + Arrays.toString(muestra));
        Arrays.sort(muestra, Collections.reverseOrder());
        JOptionPane.showMessageDialog(null, "Array ordenada con la edad maxima de victor " + Arrays.toString(muestra));

    }
}
