import javax.swing.*;
import java.util.Arrays;
import java.util.Random;

public class BusquedaBinaria {
    public static void main(String[] args) {

        Integer[] cincoPuntosMasNelson = new Integer[10];
        Random random = new Random();

        for (int i = 0; i < cincoPuntosMasNelson.length; i++) {

            cincoPuntosMasNelson[i] = random.nextInt(100) + 1;
        }

        Arrays.sort(cincoPuntosMasNelson);
        JOptionPane.showMessageDialog(null, "Array ordenado: " + Arrays.toString(cincoPuntosMasNelson));

        // Solicitamos al usuario el número a buscar
        int valorBuscado = Integer.parseInt(JOptionPane.showInputDialog(null, "Ingrese un valor a buscar: "));

        // Búsqueda Binaria
        int busqueda = Arrays.binarySearch(cincoPuntosMasNelson, valorBuscado);

        if (busqueda >= 0) {
            JOptionPane.showMessageDialog(null, "Se encontró su número en el índice: " + busqueda);
        } else {
            JOptionPane.showMessageDialog(null, "No se encontró su número");
        }

    }
}
