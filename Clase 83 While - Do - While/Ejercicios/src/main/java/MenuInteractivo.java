/*
Menú interactivo con while: Crea un menú interactivo que contenga 5 opciones que pueda elegir el usuario,
 por ejemplo:

Comprar producto.

Realizar devolución.

Ver mis Pedidos.

Preguntas frecuentes.

Salir.

Luego solicite al usuario que elija una opción del conjunto de
opciones mostradas por pantalla. El menú debe seguir apareciendo hasta
que el usuario elija la opción para salir del programa. Para este ejercicio,
no es necesario que las opciones del menú realicen acciones reales.
Solo necesitas mostrar un mensaje que indique qué opción eligió el usuario.
* */


import javax.swing.*;

public class MenuInteractivo {
    public static void main(String[] args) {
        String[] menu = {"Comprar producto", "Realizar devolución", "Ver mis Pedidos", "preguntas Frecuentes", "Salir"};
        String option;

        do {
            option = (String) JOptionPane.showInputDialog(null, "Elige una opción", "Menú", JOptionPane.QUESTION_MESSAGE, null, menu, menu[0]);

            JOptionPane.showMessageDialog(null, "Usted sececcionó: " + option);
        } while (option != "Salir");



    }
}
