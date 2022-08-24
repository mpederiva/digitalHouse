package AS06_0804_PI2;

interface IGradeDeFilmes {
    Filme getFilme(String nomeDoFilme) throws FilmeNaoHabilitadoException;
}