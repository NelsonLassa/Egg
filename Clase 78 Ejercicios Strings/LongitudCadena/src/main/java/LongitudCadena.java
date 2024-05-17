import javax.swing.*;
/*Ejercicio de longitud de cadena: Escribir un programa que solicite
al usuario una cadena de texto y muestre en pantalla la longitud
de la cadena utilizando el método length() de la clase String.
*/

public class LongitudCadena {
    public static void main(String[] args) {

        String cadena = JOptionPane.showInputDialog(null, "Ingrese una cadena:");

        if(cadena.length() != 0){
            JOptionPane.showMessageDialog(null,"Su cadena tiene "+cadena.length()+" carcteres");
        }else {
            JOptionPane.showMessageDialog(null,"No ingreso ningun caracter");
        }

    }
}
