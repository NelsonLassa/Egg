import javax.swing.JOptionPane;

public class EsPar {

    /**
     * 1. Es par:
     * 
     * Ejercicio anterior: Reemplaza la lógica de pedir un número
     * por un método llamado "solicitarNumero()" que no reciba parámetros
     * y devuelva un entero.
     * También reemplaza la condición del if por un método llamado
     * "esPar()" que reciba por parámetro un entero y devuelva un
     * booleano.
     * 
     * Clase de test: Crea una clase test para testear este ejercicio.
     */

    public static void main(String[] args) {

        // Aqui realizamos un llamado complejo
        if (esPar(solicitarNumero())) {
            JOptionPane.showMessageDialog(null, "El número ingresado es par.");
        } else {
            JOptionPane.showMessageDialog(null, "El número ingresado es impar.");
        }
    }

    public static Integer solicitarNumero() {
        return Integer.parseInt(JOptionPane.showInputDialog("Ingrese un número: "));
    }

    public static boolean esPar(int num) {
        return num % 2 == 0;
    }
}
