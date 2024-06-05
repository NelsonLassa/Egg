/*
Adivinar el número: Escribir un programa que genere un número aleatorio entre 1 y 100,
y muestre por consola un mensaje que le pida al usuario adivinar ese número utilizando
 un bucle do-while. El programa debe mostrar un mensaje indicando si el número ingresado
  es mayor o menor que el número aleatorio, y continuar pidiendo al usuario que adivine
  hasta que lo haga correctamente.
*/

import javax.swing.*;
import java.util.Random;

public class AdivinaNumero {
    public static void main(String[] args) {
        Random aleatori = new Random();
        int encontrame = aleatori.nextInt(100) + 1;

        int buscar;
        int i = 1;
        do {
            buscar = Integer.parseInt(JOptionPane.showInputDialog("Adivina el numero del 1 al 100 que estoy pensando " + i + "° intento"));
            i++;
            if (buscar < encontrame) {
                JOptionPane.showMessageDialog(null, "El numero ingresado es menor");
            } else if (buscar > encontrame) {
                JOptionPane.showMessageDialog(null, "El numero ingresado es mayor");
            }else {
                JOptionPane.showMessageDialog(null,"Felicidades encontraste el numero que era "+encontrame+"\n en el intento N°: "+i);
            }

        } while (encontrame != buscar);
    }
}
