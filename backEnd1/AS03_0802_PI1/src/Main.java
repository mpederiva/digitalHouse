public class Main {
    public static void main(String[] args) {
        Funcionario func1 = new Funcionario("Marta", 0);
        Funcionario func2 = new Funcionario("Matheus", 1);
        Funcionario func3 = new Funcionario("Cristiane", 2);
        Funcionario func4 = new Funcionario("Eduardo", 3);

        Vendedor afi1 = new Afiliado("J. Felipe");
        Vendedor afi2 = new Afiliado("Micheli");
        Vendedor afi3 = new Afiliado("Giovanna");
        Vendedor afi4 = new Afiliado("Thiago");

        Estagiario est1 = new Estagiario("Baby");
        Estagiario est2 = new Estagiario("Recolocado");

        func1.addAfiliado(afi1);
        func2.addAfiliado(afi2);
        func3.addAfiliado(afi3);
        func4.addAfiliado(afi4);

        System.out.println(func1.toString());
        System.out.println(func2.toString());
        System.out.println(func3.toString());
        System.out.println(func4.toString());
    }
}
