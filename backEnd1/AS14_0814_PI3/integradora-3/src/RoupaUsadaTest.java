import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;


class RoupaUsadaTest {
    RoupaUsada roupaUsada= new RoupaUsada();;
    String tamanho, tipo, eUsada, importado;
    @BeforeEach
    public void setup(){
        tamanho = "XS";
        tipo = "calça";
        eUsada = "usado";
        importado = "importado";
    }

    @Test
    void getRoupa() {
        roupaUsada.getRoupa(tamanho, tipo, eUsada, importado);
        roupaUsada.getRoupa(tamanho, tipo, eUsada, importado);
        Roupa roupa = roupaUsada.getRoupa(tamanho, tipo, eUsada, importado);

        Assertions.assertEquals(1, roupaUsada.getRoupasUsadas().size());
        Assertions.assertEquals("calça", roupa.getTipo());
    }
}