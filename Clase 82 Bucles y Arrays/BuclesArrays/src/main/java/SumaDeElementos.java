


import javax.swing.*;
import java.util.Arrays;

public class SumaDeElementos {
    public static void main(String[] args) {

        // Suma de elementos
        int[] array1 = {4, 6, 8};
        int suma = array1[0] + array1[1] + array1[2];
        JOptionPane.showMessageDialog(null, "La suma es: " + suma);

        // Promedio
        float promedio = suma / (array1.length);
        JOptionPane.showMessageDialog(null, "El promedio es: " + promedio);

        // Encontrar el máximo
        Arrays.sort(array1);
        JOptionPane.showMessageDialog(null,"El valor mayor de la array es: "+array1[array1.length-1]);

        // Buscar un elemento

        int entrada = Integer.parseInt(JOptionPane.showInputDialog(null,"Ingrese un numero: "));

        // BinarySearch guarda el indice de donde encontro el numero
        int busqueda = Arrays.binarySearch(array1,entrada);


        if (busqueda >=0){
            JOptionPane.showMessageDialog(null,"Se encontro el numero en el arreglo en la posicion: "+ (busqueda+1));
        }else {
            JOptionPane.showMessageDialog(null,"El valor ingresado no se encontro ");
        }
        // Copiar elementos

        int[] copia1 = Arrays.copyOfRange(array1,0,array1.length+2); //Es solo para copiarla completa o una parte

        JOptionPane.showMessageDialog(null,"La Copia1 del arrays es: "+Arrays.toString(copia1));

        int[] copia2 = Arrays.copyOf(array1,array1.length+2);
        JOptionPane.showMessageDialog(null,"La Copia2 del arrays es: "+Arrays.toString(copia2));

        // Ordenar elementos

        String[] nombres = new String[4];

        // Ingreso 1
        nombres[0]= JOptionPane.showInputDialog(null,"Ingrese el primer nombre: ");

        // Ingreso 2
        nombres[1]= JOptionPane.showInputDialog(null,"Ingrese el segundo nombre: ");

        // Ingreso 3
        nombres[2]= JOptionPane.showInputDialog(null,"Ingrese el tercero nombre: ");

        // Ingreso 4
        nombres[3]= JOptionPane.showInputDialog(null,"Ingrese el cuarto nombre: ");

        Arrays.sort(nombres);

        JOptionPane.showMessageDialog(null,"La lista ordenada alfabeticamente: "+Arrays.toString(nombres));
    }
}
