/*
* Generador de contraseñas
Desarrollar un programa en Java que genere una contraseña aleatoria. Esta contraseña estará compuesta por una mezcla de letras mayúsculas, letras minúsculas y dígitos. La contraseña deberá ser almacenada en un arreglo de caracteres.

Para la generación de la contraseña, utilice un bucle for que repita la operación tantas veces como la longitud de la contraseña que haya especificado el usuario.

Para comprobar que la contraseña generada contiene al menos una letra mayúscula, una letra minúscula y un dígito, utilice bucles do-while y while con los métodos isUpperCase, isLowerCase y isDigit de la clase Character.

Finalmente, convierta el arreglo de caracteres en un String con un for y luego imprima la contraseña generada en la consola.*/

import javax.swing.*;
import java.util.Random;
import java.util.jar.JarOutputStream;

public class contrasenia {

    public static void main(String[] args) {

        int longitud = Integer.parseInt(JOptionPane.showInputDialog(null, "Ingresa la longitud de la contraseña: "));
        char[] password = new char[longitud];
        boolean mayuscula;
        boolean minuscula;
        boolean numero;
        Random random = new Random();
        System.out.println(password);
        do {
            mayuscula = false;
            minuscula = false;
            numero = false;
            for (int i = 0; i < longitud; i++) {
                int opcion = random.nextInt(3);
                if (opcion == 1) {
                    password[i] = (char) (random.nextInt(26) + 65);
                    mayuscula = true;
                } else if (opcion == 2) {
                    password[i] = (char) (random.nextInt(10) + 48);
                    minuscula = true;
                } else {
                    password[i] = (char) (random.nextInt(26) + 97);
                    numero = true;
                }
            }
        } while (!mayuscula || !minuscula || !numero);

        String contrasenia = String.valueOf(password);
        System.out.println("La contraseña es " + contrasenia);
        //JOptionPane.showMessageDialog(null, "La contraseña es: " + contrasenia);
    }


}
