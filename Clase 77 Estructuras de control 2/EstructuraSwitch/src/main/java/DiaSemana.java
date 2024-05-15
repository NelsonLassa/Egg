import javax.swing.*;

public class DiaSemana {

    public static void main(String[] args) {
        int valor =  Integer.parseInt(JOptionPane.showInputDialog(null,"Ingrese un valor entero del 1 al 7"));
        JOptionPane.showMessageDialog(null,"Numero seleccionado es: "+valor);

        String nose = switch (valor){
            case 1,2,3,4, 5 -> "Día laboral";
            case 6, 7 -> "Día no laboral";
            default -> "Número fuera de rango";
        };
        JOptionPane.showMessageDialog(null,"Numero seleccionado es: "+nose);
    }
}
