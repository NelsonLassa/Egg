import javax.swing.*;

public class metodoNumeroAleatorio {

    public static void main(String[] args) {

        JOptionPane.showMessageDialog(null,"El valor aleatorio es: "+numeroAleatorio());
    }
    public static int numeroAleatorio(){
        int alem = (int) Math.floor(Math.random()*100)+1;
        System.out.println("El numero aleatorio es: "+alem);
        return alem;
    }
}
