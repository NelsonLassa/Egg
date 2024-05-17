import javax.swing.*;
import java.util.jar.JarEntry;

public class ExtarccionSubCadena {

    public static void main(String[] args) {
        String cadena = JOptionPane.showInputDialog(null, "Por favor ingrese una cadena de texto que sera truncada: ");
        int indiceInicial = Integer.parseInt(JOptionPane.showInputDialog(null, "Por Favor ingrese el primer indice: "));
        int indiceFinal = Integer.parseInt(JOptionPane.showInputDialog(null, "Ingresa el indice final: "));


        if (indiceInicial >= 0 && indiceFinal< cadena.length() && indiceFinal>indiceInicial){

            String subCadena = cadena.substring(indiceInicial,indiceFinal);
            JOptionPane.showMessageDialog(null,"Cadena truncada:  "+subCadena);
        }else {
            JOptionPane.showMessageDialog(null,"Ingrese nuevamente sus indices");
        }
    }
}
