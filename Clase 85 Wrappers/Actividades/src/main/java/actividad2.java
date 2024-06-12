/*
*Conversión de cadena a número: Escribir un programa que lea un dato tipo cadena
* pero que represente un número entero como entrada utilizando la clase Scanner,
*  y luego convierta la cadena en un número entero utilizando la clase de envoltura Integer.*/


import javax.swing.*;

public class actividad2 {

    public static void main(String[] args) {
        String cagada3 = JOptionPane.showInputDialog(null,"Ingrese una cadena de números: ");

        int cagadaEnteger = Integer.valueOf(cagada3);

        JOptionPane.showMessageDialog(null,"La cadena a numero: "+ cagadaEnteger);
    }
}
