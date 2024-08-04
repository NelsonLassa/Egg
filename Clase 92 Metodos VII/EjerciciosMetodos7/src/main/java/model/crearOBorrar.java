package model;
import constants.Text;
import form.menuOraciones;
import javax.swing.*;

public class crearOBorrar {
    private Integer hola;
    public static String obtenerOracion(String oracion){
        if (oracion.isEmpty()){
            oracion = crearOracion();
        }else {
            oracion = borrarOracion();
        }
        return oracion;
    }
    public static String crearOracion(){
        String oracion = JOptionPane.showInputDialog(null,"Ingrese una oración:");
        return oracion;
    }

    public static String borrarOracion(){
        String oracion ="";
        JOptionPane.showMessageDialog(null,"La oración fue borrada");
        return oracion;
    }

    public void setHola(Integer hola) {
        this.hola = hola;
    }

    public Integer getHola() {
        return hola;
    }
}
