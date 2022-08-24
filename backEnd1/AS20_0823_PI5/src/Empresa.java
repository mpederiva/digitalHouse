import java.io.Serializable;
import java.util.List;

public class Empresa implements Serializable {

    /** Atributos **/
    private String CNPJ;
    private String razaoSocial;
    private List<Funcionario> funcionarios;

    /** Construtor **/
    public Empresa(String CNPJ, String razaoSocial, List<Funcionario> funcionarios) {
        this.CNPJ = CNPJ;
        this.razaoSocial = razaoSocial;
        this.funcionarios = funcionarios;
    }

    /** Getter/Setter **/
    public String getCNPJ() {
        return CNPJ;
    }

    public void setCNPJ(String CNPJ) {
        this.CNPJ = CNPJ;
    }

    public String getRazaoSocial() {
        return razaoSocial;
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial;
    }

    public List<Funcionario> getFuncionarios() {
        return funcionarios;
    }

    public void setFuncionarios(List<Funcionario> funcionarios) {
        this.funcionarios = funcionarios;
    }

    /** Override **/
    @Override
    public String toString() {
        return "Empresa{" +
                "CNPJ='" + CNPJ + '\'' +
                ", razaoSocial='" + razaoSocial + '\'' +
                ", funcionarios=" + funcionarios +
                '}';
    }
}
