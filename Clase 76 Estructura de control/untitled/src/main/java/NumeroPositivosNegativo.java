import javax.swing.*;

public class NumeroPositivosNegativo {

    public static void main(String[] args) {
        int numero = Integer.parseInt(JOptionPane.showInputDialog(null, "Ingresa un valor numerico entero: "));


        boolean valor = numero > 0;
        if (valor){
            JOptionPane.showMessageDialog(null,"El numero es positivo");
        } else if (numero<0) {
            JOptionPane.showMessageDialog(null,"El numero es negativo");
        }else {
            JOptionPane.showMessageDialog(null,"El numero es cero");
        }

    }
}
