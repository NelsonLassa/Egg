package form;

import javax.swing.*;

import constants.Text;
import model.crearOBorrar;

public class menuOraciones {
    //    public static String oracion="";
    public static int menuOroaciones() {
        String strOpcion;
        int opcion = 0;

        do {

            strOpcion = JOptionPane.showInputDialog(Text.MENU);

            if (strOpcion == null) {
                // Si el usuario presiona la cruz o salir
                opcion = 9; // Asignamos el valor 9 para salir del bucle
                break;
            }

            // TODO convertimos la variable String en integer
            try {
                opcion = Integer.parseInt(strOpcion);
            } catch (NumberFormatException e) {
                JOptionPane.showMessageDialog(null, "Error, solo se permiten numeros");
                opcion = 0;
            }
            switch (opcion) {

                case 1:
                    JOptionPane.showMessageDialog(null, "Crear oración o Borrar oración");
                    crearOBorrar.obtenerOracion(Text.oracion);
                    System.out.println(Text.oracion);
                    break;
                case 2:
                    JOptionPane.showMessageDialog(null, "Cantidad de caracteres de la oración");

                    break;
                case 3:
                    JOptionPane.showMessageDialog(null, "Cantidad de palabras de la oración");
                    break;
                case 4:
                    JOptionPane.showMessageDialog(null, "Mostrar palabras ordenadas alfabeticamente");
                    break;
                case 5:
                    JOptionPane.showMessageDialog(null, "Ingresar un número y devolver la palabra correspondiente");
                    break;
                case 6:
                    JOptionPane.showMessageDialog(null, "Buscar palabra dentro de la oracion");
                    break;
                case 7:
                    JOptionPane.showMessageDialog(null, "Modificar palabra dentro de la oración");
                    break;
                case 8:
                    JOptionPane.showMessageDialog(null, "Agregar contenido a la oración");
                    break;
                case 9:
                    JOptionPane.showMessageDialog(null, "Salir");
                    break;
                default:
                    JOptionPane.showMessageDialog(null, "Opcion no valida, las opciones son de 1 a 9");
            }
        } while (opcion != 9);
        return opcion;

    }
}
