package model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class crearOBorrarTest {

    @org.junit.jupiter.api.Test
    void obtenerOracion() {
    }

    @org.junit.jupiter.api.Test
    void crearOracion() {
    }

    @org.junit.jupiter.api.Test
    void borrarOracion() {
    }


    @Test
    void setHola() {
        crearOBorrar instance = new crearOBorrar();
        instance.setHola(12); // Intentamos establecer el valor de 'hola' a 10
        assertEquals(10, instance.getHola()); // Esperamos que 'hola' sea 10, pero será 42
    }
}