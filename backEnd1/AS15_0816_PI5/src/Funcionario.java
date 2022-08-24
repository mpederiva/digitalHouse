import java.io.Serializable;

public class Funcionario implements Serializable {
    /** Atributos **/
    private String nome;
    private String sobrenome;
    private String RGouCPF;
    private Double salario;

    /** Construtor **/
    public Funcionario(String nome, String sobrenome, String RGouCPF, Double salario) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.RGouCPF = RGouCPF;
        this.salario = salario;
    }

    /** Getters/Setters **/
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getRGouCPF() {
        return RGouCPF;
    }

    public void setRGouCPF(String RGouCPF) {
        this.RGouCPF = RGouCPF;
    }

    public Double getSalario() {
        return salario;
    }

    public void setSalario(Double salario) {
        this.salario = salario;
    }
}
