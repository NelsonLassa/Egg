package test;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import src.Ejercicio1;

public class Ejercicio1Test {
    @Test
    void testDoble() {
        Integer resultado = Ejercicio1.doble(2);
        Assertions.assertEquals(3, resultado);
    }
}
