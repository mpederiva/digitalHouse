package paciente.model;

import java.time.LocalDate;

public class Paciente {

    /** Atributos **/
    private Integer idPaciente;
    private String nome, sobrenome;
    private LocalDate data;
    private Endereco endereco;

    /** Construtor **/
    public Paciente(Integer idPaciente, String nome, String sobrenome, LocalDate data, Endereco endereco) {
        this.idPaciente = idPaciente;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.data = data;
        this.endereco = endereco;
    }

    public Paciente(String nome, String sobrenome, LocalDate data, Endereco endereco) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.data = data;
        this.endereco = endereco;
    }

    /** Getter/Setter **/
    public Integer getIdPaciente() {
        return idPaciente;
    }

    public void setIdPaciente(Integer idPaciente) {
        this.idPaciente = idPaciente;
    }

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

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    @Override
    public String toString() {
        return "Paciente{" +
                "idPaciente=" + idPaciente +
                ", nome='" + nome + '\'' +
                ", sobrenome='" + sobrenome + '\'' +
                ", data=" + data +
                ", endereco=" + endereco +
                '}';
    }
}
