import javax.swing.*;

public class ConcatenacionCarcteres {

    public static void main(String[] args) {

        String nombre = JOptionPane.showInputDialog(null,"Nombre");
        String apellido = JOptionPane.showInputDialog(null, "Apellido");

        String nombreCompleto = nombre.concat(" " +apellido);
        JOptionPane.showMessageDialog(null,"Gracias "+nombreCompleto);

    }
}
