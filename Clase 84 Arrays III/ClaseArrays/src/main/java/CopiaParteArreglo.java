
import javax.swing.*;
import java.util.Arrays;

/*
        Copiar parte de un arreglo: Crear un programa en Java que declare y muestre un arreglo de enteros junto con sus índices.
        Luego, el programa debe solicitar al usuario dos índices: un índice inicial y un índice final. Con estos dos índices,
        el programa debe copiar la parte del arreglo original comprendida entre estos dos índices (inclusive) en un nuevo
        arreglo utilizando el método Arrays.copyOfRange(). Asegúrese de incluir validaciones para confirmar que el índice inicial
        es menor que el índice final y que ambos índices estén dentro del rango válido del arreglo original. Finalmente, el programa
        debe imprimir el nuevo arreglo por consola.
        */
public class CopiaParteArreglo {
    public static void main(String[] args) {
        Integer[] sigan = {4, 5, 8, 1, 3, 4, 6, 7};
        JOptionPane
                .showMessageDialog(null, "El Array quedó así: " + Arrays.toString(sigan));
        int inicio = Integer.parseInt(JOptionPane.showInputDialog(null, "Ingrese el inicio de copiado"));
        int terminar = 0;
        do {
            terminar = Integer.parseInt(JOptionPane.showInputDialog(null, "Ingrese el final de copiado"));
        } while (terminar > sigan.length);

        Integer[] feo = Arrays.copyOfRange(sigan, inicio - 1, terminar - 1);
        JOptionPane.showMessageDialog(null, "El Array quedó así: " + Arrays.toString(feo));
    }
}