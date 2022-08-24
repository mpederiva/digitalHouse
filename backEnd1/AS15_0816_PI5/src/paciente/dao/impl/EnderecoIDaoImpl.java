package paciente.dao.impl;

import org.apache.log4j.Logger;
import paciente.dao.ConfiguracaoJDBC;
import paciente.dao.IDao;
import paciente.model.Endereco;
import paciente.model.Paciente;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

public class EnderecoIDaoImpl implements IDao<Endereco> {

    private ConfiguracaoJDBC configuracaoJDBC;

    static final Logger log = Logger.getLogger(EnderecoIDaoImpl.class);

    public EnderecoIDaoImpl(ConfiguracaoJDBC configuracaoJDBC) {
        this.configuracaoJDBC = configuracaoJDBC;
    }

    @Override
    public Endereco salvar(Endereco endereco) {

        log.debug("Endereço salvo");
        Connection connection = configuracaoJDBC.conectarBD();
        Statement statement = null;
        String query = String.format("INSERT INTO endereco(rua, numero, cidade, bairro) VALUES('%s', '%s', '%s', '%s')", endereco.getRua(),endereco.getNumero(),endereco.getCidade(),endereco.getBairro());

        try{
            statement = connection.createStatement();
            statement.executeUpdate(query, Statement.RETURN_GENERATED_KEYS);
            ResultSet resultSet = statement.getGeneratedKeys();

            if(resultSet.next()){
                endereco.setIdEndereco(resultSet.getInt(1));
            }

            connection.close();
        }catch (Exception e){
            e.printStackTrace();

        }


        return endereco;
    }
}
