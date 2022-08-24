package paciente.dao.impl;

import org.apache.log4j.Logger;
import paciente.dao.ConfiguracaoJDBC;
import paciente.dao.IDao;
import paciente.model.Paciente;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

public class PacienteIDaoImpl implements IDao<Paciente> {

    private ConfiguracaoJDBC configuracaoJDBC;

    static final Logger log = Logger.getLogger(PacienteIDaoImpl.class);

    public PacienteIDaoImpl(ConfiguracaoJDBC configuracaoJDBC) {
        this.configuracaoJDBC = configuracaoJDBC;
    }

    @Override
    public Paciente salvar(Paciente paciente) {

        log.debug("Paciente salvo");
        Connection connection = configuracaoJDBC.conectarBD();
        Statement statement = null;
        String query = String.format("INSERT INTO paciente(nome, sobrenome, data, idEndereco) VALUES('%s', '%s', '%s', '%s')", paciente.getNome(),paciente.getSobrenome(),paciente.getData(),paciente.getEndereco().getIdEndereco());

        try{
            statement = connection.createStatement();
            statement.executeUpdate(query, Statement.RETURN_GENERATED_KEYS);
            ResultSet resultSet = statement.getGeneratedKeys();

            if(resultSet.next()){
                paciente.setIdPaciente(resultSet.getInt(1));
            }

            connection.close();
        }catch (Exception e){
            e.printStackTrace();

        }


        return paciente;
    }
}
