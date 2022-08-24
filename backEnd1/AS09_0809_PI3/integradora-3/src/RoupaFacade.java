public class RoupaFacade {
    private RoupaImportada roupaImportada;
    private RoupaUsada roupaUsada;
    private RoupaTamanho roupaTamanho;

    public RoupaFacade(){
        this.roupaImportada = new RoupaImportada();
        this.roupaUsada = new RoupaUsada();
        this.roupaTamanho = new RoupaTamanho();
    }

    public void getRoupa (String tamanho, String tipo, String eUsado, String eImportado){
        roupaTamanho.getRoupa(tamanho, tipo, eUsado, eImportado);
        roupaUsada.getRoupa(tamanho, tipo, eUsado, eImportado);
        roupaImportada.getRoupa(tamanho, tipo, eUsado, eImportado);
    }
}
