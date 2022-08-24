package paciente.dao;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConfiguracaoJDBC {

    /** Atributos **/
    private String jdbcDriver;
    private String dbUrl;
    private String nomePaciente;
    private String senha;

    /** Construtor **/
    public ConfiguracaoJDBC(String jdbcDriver, String dbUrl, String nomePaciente, String senha) {
        this.jdbcDriver = jdbcDriver;
        this.dbUrl = dbUrl;
        this.nomePaciente = nomePaciente;
        this.senha = senha;
    }

    public ConfiguracaoJDBC(){
        this.jdbcDriver = "org.h2.Driver";
        this.dbUrl = "jdbc:h2:mem:pacientes;DB_CLOSE_DELAY=-1;INIT=RUNSCRIPT FROM 'create.sql'";
        this.nomePaciente = "sa";
        this.senha = "";
    }

    /** Try/Catch **/
    public Connection conectarBD(){
        Connection connection = null;
        try {
            Class.forName(jdbcDriver).newInstance();
            connection = DriverManager.getConnection(dbUrl, nomePaciente, senha);
        }catch (Exception e){
            e.printStackTrace();
        }
        return connection;
    }

}
