public class Estagiario extends Vendedor{

    public Estagiario(String nome){
        super.nome = nome;
        super.PONTOS_POR_VENDA = 5;
    }

    @Override
    public int calcularPontos() {
        return super.vendas * PONTOS_POR_VENDA;
    }

    @Override
    public String mostrarCategoria() {
        int pontuacao = calcularPontos();
        if (calcularPontos() < 0) {
            return "Pontuação negativa ou dado incorreto!";
        } else if (calcularPontos() < 50){
            return "Estagiário(a) " + super.nome + " é Novato(a), com " + calcularPontos() + " pontos.";
        } else {
        return "Estagiário(a) " + super.nome + " é Experiente, com " + calcularPontos() + " pontos.";
        }
    }
}