import javax.swing.*;

public class ValidacionContrasenia {
    public static void main(String[] args) {

        boolean estado = false;


        String contrasenia = JOptionPane.showInputDialog(null,"Ingrese contraseña: de 8 caracteres minimo, mayusculas y minusculas, numeros y caracteres especiales: ");

        if (contrasenia.length() < 8){
            JOptionPane.showMessageDialog(null,"La contraseña es muy corta");
        } else if (!contrasenia.chars().anyMatch()) {
            
        }

    }
}
