import javax.swing.*;
import java.util.Random;

public class contrasena {

    public static void main(String[] args) {

        JOptionPane.showMessageDialog(null,"El valor aleatorio es: "+numeroAleatoreo());
    }
    public static int numeroAleatoreo(){
        int alem = (int) Math.floor(Math.random()*100)+1;
        System.out.println("El numero aleatorio es: "+alem);
        return alem;
    }
}
