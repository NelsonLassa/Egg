import javax.swing.*;

/*
Cuenta espacios en blanco en una cadena: Pide al usuario que ingrese una cadena.
 Crea un bucle que recorra cada carácter en la cadena y use Character.isWhitespace()
 para contar el número de espacios en blanco en la cadena. Muestra el recuento al usuario.
*/
public class actividad4 {
    public static void main(String[] args) {
        String contexto = JOptionPane.showInputDialog(null, "Ingrese una oración");
        int contador = 0;
        for (int i = 0; i < contexto.length(); i++) {
            char caracter = contexto.charAt(i);
            if (Character.isWhitespace(caracter)) {
                contador++;
            }
        }
        if (contador > 0) {
            JOptionPane.showMessageDialog(null,"Se encontro "+contador+" cantidades de espacios en esta oración");
        }else {
            JOptionPane.showMessageDialog(null,"No se encontró ningún espacio");
        }
    }
}
