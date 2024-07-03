/*
Verificar si una cadena contiene solo letras: Pide al usuario que ingrese una cadena.
Crea un bucle que recorra cada carácter en la cadena y use Character.isLetter() para
 verificar si todos los caracteres son letras. Muestra un mensaje al usuario indicando
  si la cadena contiene solo letras o no.*/

import javax.swing.*;

public class actividad3 {
    public static void main(String[] args) {
        String cadena = JOptionPane.showInputDialog(null,"Ingrese una oración:");
        boolean letra = true;
        for (int i = 0; i < cadena.length(); i++) {
            //TODO metodo que devuelve un valor boolean si no es una letra devuelve un false
            letra = Character.isLetter(cadena.charAt(i));
            if (letra == false){
                break;
            }
        }
        if (letra){
            JOptionPane.showMessageDialog(null,"La cadena ingresada esta compuesta de letras ");
        }else {
            JOptionPane.showMessageDialog(null,"La cadena ingresada no esta compuesta de letras solamente ");
        }


    }
}
