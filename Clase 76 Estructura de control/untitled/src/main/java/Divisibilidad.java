import javax.swing.*;

public class Divisibilidad {

    public static void main(String[] args) {
        int numero = Integer.parseInt(JOptionPane.showInputDialog(null, "Analizaremos un numero entero..."));

        boolean dp3 = numero % 3 == 0;
        boolean dp5 = numero % 5 == 0;
        if(dp3 &&dp5){
            JOptionPane.showMessageDialog(null, "Es divisible por 3 y 5");
        } else if (dp5) {
            JOptionPane.showMessageDialog(null,"Es divisible por 5");
        } else if (dp3) {
            JOptionPane.showMessageDialog(null, "Es divisible por 3");
        }else {
            JOptionPane.showMessageDialog(null,"No es divisible por 3 o por 5");
        }
    }


}
