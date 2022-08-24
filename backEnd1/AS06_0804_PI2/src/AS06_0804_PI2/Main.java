package AS06_0804_PI2;

class Main {
    public static void main(String[] args) {

        GradeDeFilmesProxy proxy = new GradeDeFilmesProxy(new GradeDeFilmes());

        proxy.setIp(new Ip(201,23,23,25));

        try {
            System.out.println(proxy.getFilme("Como seria se...?").getLink());
            System.out.println("Acesso do filme liberado!");
        }
        catch (FilmeNaoHabilitadoException error){
            System.out.println(error.getMessage());
        }
    }
}