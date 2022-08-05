import java.util.ArrayList;

public class Funcionario extends Vendedor {

    private int anosAntiguidade;

    private ArrayList<Vendedor> afiliados = new ArrayList<>();

    public Funcionario(String nome, int anosAntiguidade){
        super.nome = nome;
        super.PONTOS_POR_VENDA = 5;
        this.anosAntiguidade = anosAntiguidade;
    }

    /*agrega um afiliado ao funcionario, e por sua vez soma os pontos*/
    public void addAfiliado(Vendedor afiliado){
        this.afiliados.add(afiliado);
        System.out.println(afiliado.nome + " agora é afiliado de " + super.nome);
    }

    /*implementação do método abstrato*/
    /*por cada ano de antiguidade obtem 5 pontos, por cada afiliado obtem 5*/
    @Override
    public int calcularPontos() {
        return (this.afiliados.size()*10) + (this.anosAntiguidade*5);
    }

    @Override
    public String mostrarCategoria() {
        int pontuacao = calcularPontos();
        if (calcularPontos() <= 0 ){
            return "Vendedor(a), seu saldo está nulo. Vamos vender?";
        } else if (calcularPontos() < 20){
            return "Vendedor(a) " + super.nome + " é Novato(a), com " + calcularPontos() + " pontos.";
        } else if (calcularPontos() >= 20 && calcularPontos() <31){
            return "Vendedor(a) " + super.nome + " é Aprendiz, com " + calcularPontos() + " pontos.";
        } else if (calcularPontos() >30 && calcularPontos() <41){
            return "Vendedor(a) " + super.nome + " é Bom(Boa), com " + calcularPontos() + " pontos.";
        } else{
            return "Vendedor(a) " + super.nome + " é Mestre, com " + calcularPontos() + " pontos.";
    }
}}