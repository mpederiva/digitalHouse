public class Afiliado extends Vendedor {

    public Afiliado(String nome) {
        super.nome = nome;
        super.PONTOS_POR_VENDA = 15;
    }

    @Override
    public int calcularPontos() {
        return this.vendas * PONTOS_POR_VENDA;
    }

    @Override
    public String mostrarCategoria() {
        int pontuacao = calcularPontos();
        return "Afiliado " + super.nome + " está com com " + calcularPontos() + " pontos. Para possuir categoria torne-se vendedor(a) e desafie sues limites!";
    }
}