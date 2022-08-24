import java.util.HashMap;
import java.util.Map;

public class RoupaUsada {
    private Map<String, Roupa> roupasUsadas;

    public Map<String, Roupa> getRoupasUsadas() {
        return roupasUsadas;
    }

    public RoupaUsada() {
        this.roupasUsadas = new HashMap<>();
    }

    public Roupa  getRoupa(String tamanho, String tipo, String eNovo, String importada){
        String id = "id: " + tamanho + ":" + tipo+ ":" +eNovo+ ":" +importada;

        if(eUsado(eNovo)) {
            if (roupasUsadas.containsKey(id)) {
                Roupa roupa = roupasUsadas.get(id);
                roupa.setContador(roupa.getContador() + 1);
                System.out.println("Roupa Obtida em roupas usadas total: " + roupa.getContador());
                return roupa;
            } else {
                roupasUsadas.put(id, new Roupa(tamanho, tipo, eNovo, importada));
                System.out.println("Roupa Cadastrada em roupas usadas");
                return roupasUsadas.get(id);
            }

        }
        return null;
    }

    public boolean eUsado(String roupa){
        if(roupa.equalsIgnoreCase("usado")){
            return true;
        }
        return false;
    }

}
