import javax.swing.*;
import java.util.InputMismatchException;
import java.util.Scanner;
/*
Ejercicio de división segura: Escribe un programa que solicite al usuario dos números enteros y
realice la división del primer número entre el segundo número.Utiliza un bloque "try-catch" para manejar
la excepción en caso de que se intente realizar una división por cero.
En caso de que se produzca la excepción, muestra un mensaje adecuado en pantalla.
*/


public class DivisionSegura {

    public static void main(String[] args) {
//         Instanciamos la clase Scanner para poder tratar por consola el ingreso de los datos
        Scanner entrada = new Scanner(System.in);
        System.out.print("Ingresa un valor: ");
        int denominador = 0;
        float divi = 0;
        try {
            divi = 10 / entrada.nextInt();

            System.out.println("divi = " + divi);

        } catch (ArithmeticException error) {
            // Pila de mensajes para ver donde rompe printStackTrace()
            error.printStackTrace();
            System.out.println("error = " + error);
        } catch (InputMismatchException error) {
            System.out.println("Ingreso un caracter en lugar de número " + error.getMessage());
        } catch (Exception error) {
            System.out.println("error = " + error);
        }
        entrada.close(); // Cerrar la entrada es de buenas practicas
        System.out.println("divi = " + divi);


        ////Todo ahora con JOptionPane
        JOptionPane.showMessageDialog(null, "Realizaremos una divicion ingrese sus valores");


        double cociente = 0.0;
        try {
            int numerador2 = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el valor del numerador:"));
            int denominador2 = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el valor del denominador"));
            cociente = numerador2 / denominador2;
            JOptionPane.showMessageDialog(null, "El valor es: " + cociente);

        } catch (ArithmeticException error) {
            JOptionPane.showMessageDialog(null, "No es posible realizar la operación: " + error.getMessage());

        } catch (InputMismatchException error) {
            JOptionPane.showMessageDialog(null, "Ingreso un valor de " + error.getMessage());

        } catch (Exception error) {
            JOptionPane.showMessageDialog(null, "Su error es:" + error.getMessage());

        }
        JOptionPane.showMessageDialog(null, "El valor de la opreción es: " + cociente);

    }
}
