package AS06_0804_PI2;

public class GradeDeFilmesProxy implements IGradeDeFilmes {
    private GradeDeFilmes gradeDeFilmes;
    private Ip ipRec;

    public GradeDeFilmesProxy(GradeDeFilmes gradeDeFilmes) {
        this.setFilme(gradeDeFilmes);
    }

    public void setIp(Ip ip) {
        this.ipRec = ip;
    }

    @Override
    public Filme getFilme(String nomeDoFilme) throws FilmeNaoHabilitadoException {

        Filme filme = gradeDeFilmes.getFilme(nomeDoFilme);

        if(!(getIp().getPais()).equalsIgnoreCase(filme.getPais())) {
            throw new FilmeNaoHabilitadoException(nomeDoFilme + " não disponível no(a) " + getIp().getPais());
        }
        return filme;
    }

    public void setFilme(GradeDeFilmes filme) {
        this.gradeDeFilmes = filme;
    }

    public Ip getIp() {
        return ipRec;
    }
}