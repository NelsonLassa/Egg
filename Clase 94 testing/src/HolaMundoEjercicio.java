package src;

import javax.swing.JOptionPane;

public class HolaMundoEjercicio {
    public static void main(String[] args) {

    }

    /*
     * 1. Hola mundo:
     * 
     * Ejercicio anterior: Crea un programa que imprima "Hola Mundo" en la consola.
     * 
     * Clase de test: Crea una clase test para testear este ejercicio.
     */
    public static void mensaje() {
        JOptionPane.showMessageDialog(null, "Hola Mundo!");
    }

    /*
     * 2. Imprimir nombre y edad:
     * 
     * Ejercicio anterior: Crea un método que reciba por parámetro el nombre y la
     * edad, y luego imprima el mensaje "Me llamo [nombre] y tengo [edad] años".
     * 
     * Clase de test: Crea una clase para testear este ejercicio, excluyendo el uso
     * de la clase Scanner. En su lugar, simplemente crea el método correspondiente.
     */
    public static void mensajeConEdad(String nombre, int edad) {
        JOptionPane.showMessageDialog(null, "Hola "+nombre+" tu edad es "+edad);
    }

    /*
     * 3. Usar Scanner:
     * 
     * Ejercicio anterior: Crea dos métodos para obtener el nombre y la edad,
     * respectivamente. Ambos métodos deben recibir por parámetro una variable de
     * tipo "Scanner".
     * 
     * Clase de test: Crea una clase nueva utilizando como base este ejercicio,
     * agregando los dos métodos anteriormente mencionados.
     */
    public static void scanner() {
        String numero = JOptionPane.showInputDialog("Ingrese un numero");
    }
}