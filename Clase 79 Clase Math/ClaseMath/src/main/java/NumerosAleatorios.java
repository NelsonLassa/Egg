/*Escribir un programa que genere y muestre en pantalla un número aleatorio en el rango
del 1 al 100 utilizando el método random() de la clase Math.
Puedes utilizar el método floor() para redondear el número aleatorio hacia abajo. */

import javax.swing.*;

public class NumerosAleatorios {
    public static void main(String[] args) {
        int aleatorio = (int)(Math.random()*100+1);
        JOptionPane.showMessageDialog(null,"El Numero aleatorio generado es: "+aleatorio);
    }
}
