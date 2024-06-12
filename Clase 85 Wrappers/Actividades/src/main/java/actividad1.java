/*Suma de números: Pide al usuario que ingrese un string que represente un entero,
 y luego un string que represente un doble. Convierte cada cadena al tipo de dato
 correspondiente usando los métodos valueOf, suma sus valores e imprímelos por consola.*/

import javax.swing.*;

public class actividad1 {
    public static void main(String[] args) {
        String cagada = JOptionPane.showInputDialog(null,"Ingrese un número entero: ");
        String cagada2 = JOptionPane.showInputDialog(null,"Ingrese un número doble: ");
        JOptionPane.showMessageDialog(null,"Entero: "+Integer.valueOf(cagada));
        JOptionPane.showMessageDialog(null,"Doble: " + Double.valueOf(cagada2));
        JOptionPane.showMessageDialog(null,"La suma de los números es: " + (Double.valueOf(cagada2)+Integer.valueOf(cagada)));
    }
}
