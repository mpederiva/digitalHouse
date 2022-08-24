import java.util.HashMap;
import java.util.Map;

public class RoupaTamanho {
    private Map<String, Roupa> tamanhoXS, tamanhoS, tamanhoM;

    public RoupaTamanho() {
        this.tamanhoXS = new HashMap<>();
        this.tamanhoS = new HashMap<>();
        this.tamanhoM = new HashMap<>();
    }

    public void getRoupa(String tamanho, String tipo, String eNovo, String importada){
        String id = "id: " + tamanho + ":" + tipo+ ":" +eNovo+ ":" +importada;
        switch (tamanho){
            case "XS":
                if(tamanhoXS.containsKey(id)){
                    Roupa roupaXS = tamanhoXS.get(id);
                    roupaXS.setContador(roupaXS.getContador() + 1);
                    System.out.println("Roupa Obtida em xs, total: " + roupaXS.getContador());
                } else {
                    tamanhoXS.put(id, new Roupa(tamanho, tipo, eNovo, importada));
                    System.out.println("Roupa Cadastrada em tamanho xs" );
                }
                break;
            case "S":
                if(tamanhoS.containsKey(id)){
                    Roupa roupaS = tamanhoS.get(id);
                    roupaS.setContador(roupaS.getContador() + 1);
                    System.out.println("Roupa Obtida em s total: " + roupaS.getContador());
                } else {
                    tamanhoS.put(id, new Roupa(tamanho, tipo, eNovo, importada));
                    System.out.println("Roupa Cadastrada em tamanho s");
                }

                break;
            case "M":
                if(tamanhoM.containsKey(id)){
                    Roupa roupaM = tamanhoM.get(id);
                    roupaM.setContador(roupaM.getContador() + 1);
                    System.out.println("Roupa Obtida em m  total: " + roupaM.getContador());
                } else {
                    tamanhoS.put(id, new Roupa(tamanho, tipo, eNovo, importada));
                    System.out.println("Roupa Cadastrada em tamanho s " );
                }
                break;
            default:
                System.out.println("Não foi possível obter ou cadastrar a roupa");
                break;
        }
    }

    public Map<String, Roupa> getTamanhoXS() {
        return tamanhoXS;
    }

    public Map<String, Roupa> getTamanhoS() {
        return tamanhoS;
    }

    public Map<String, Roupa> getTamanhoM() {
        return tamanhoM;
    }
}
