package test;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import src.Ejercicio2;

public class Ejercicio2Test {
    @Test
    void testDoble() {
        Integer resultado = Ejercicio2.doble(2);
        Assertions.assertEquals(4, resultado);
    }

    @Test
    void testTriple() {
        Integer resultado = Ejercicio2.triple(3);
        Assertions.assertEquals(9, resultado);
    }
}
