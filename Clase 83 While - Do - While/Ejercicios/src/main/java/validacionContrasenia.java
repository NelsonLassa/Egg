/*
Validación de contraseña: Escribir un programa que solicite al usuario ingresar una
contraseña y la valide usando un bucle while. La contraseña correcta es "secreto".
 El programa debe seguir pidiendo al usuario que ingrese la contraseña hasta que sea correcta.
*/

import javax.swing.*;

public class validacionContrasenia {

    public static void main(String[] args) {
        String password = "secreto";
        String verify;

        do {
            verify = JOptionPane.showInputDialog(null,"Ingresa tu contraseña");
            if (!verify.equals(password)){
                JOptionPane.showMessageDialog(null,"La contraseña es incorrecta");
            }
        }while (!verify.equals(password));
    }
}
