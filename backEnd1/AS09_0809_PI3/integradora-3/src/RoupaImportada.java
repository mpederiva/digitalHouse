import java.util.HashMap;
import java.util.Map;

public class RoupaImportada {
     private Map<String, Roupa> roupasImportadas;

     public RoupaImportada() {
          this.roupasImportadas = new HashMap<>();
     }

     public Roupa getRoupa(String tamanho, String tipo, String eNovo, String importada) {
          String id = "id: " + tamanho + ":" + tipo + ":" + eNovo + ":" + importada;

          if (eImportada(importada)) {
               if (roupasImportadas.containsKey(id)) {
                    Roupa roupa = roupasImportadas.get(id);
                    roupa.setContador(roupa.getContador() + 1);
                    System.out.println("Roupa Obtida em roupas importadas, total: " + roupa.getContador());
                    return roupa;
               } else {
                    roupasImportadas.put(id, new Roupa(tamanho, tipo, eNovo, importada));
                    System.out.println("Roupa Cadastrada em roupas importadas");
                    return roupasImportadas.get(id);
               }

          }
          return null;
     }

     public boolean eImportada(String roupa){
          if(roupa.equalsIgnoreCase("importado")){
               return true;
          }
          return false;
     }

     public Map<String, Roupa> getRoupasImportadas() {
          return roupasImportadas;
     }
}
