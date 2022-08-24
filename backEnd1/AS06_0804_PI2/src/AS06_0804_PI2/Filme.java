package AS06_0804_PI2;

class Filme {
    private String nome;
    private String pais;
    private String link;

    protected Filme(String nome, String pais, String link) {
        this.nome = nome;
        this.pais = pais;
        this.link = link;
    }

    // get and setters

    protected String getNome() {
        return nome;
    }

    protected void setNome(String nome) {
        this.nome = nome;
    }

    protected String getPais() {
        return pais;
    }

    protected void setPais(String pais) {
        this.pais = pais;
    }

    protected String getLink() {
        return link;
    }

    protected void setLink(String link) {
        this.link = link;
    }



    @Override
    public String toString() {
        return "Filme{" +
                "nome ='" + nome + '\'' +
                ", pais ='" + pais + '\'' +
                ", link ='" + link + '\'' +
                '}';
    }
}