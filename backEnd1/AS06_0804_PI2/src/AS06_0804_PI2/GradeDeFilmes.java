package AS06_0804_PI2;

class GradeDeFilmes implements IGradeDeFilmes {

    @Override
    public Filme getFilme(String nomeDoFilme) throws FilmeNaoHabilitadoException {
        Filme f = switch (nomeDoFilme) {
            case "Como seria se...?" -> new Filme("Como seria se...?", "Brasil", "www.netflix.com");
            case "Razão e Sensibilidade" -> new Filme("Razão e Sensibilidade", "Brasil", "www.netflix.com");
            case "Darlings" -> new Filme("Darlings", "Brasil", "www.netflix.com");
            case "Quién te cantará" -> new Filme("Quién te cantará", "Brasil", "www.netflix.com");
            default -> null;
        };

        return f;
    }
}