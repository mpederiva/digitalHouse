import org.apache.log4j.Logger;
import org.h2.jdbc.JdbcSQLIntegrityConstraintViolationException;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class Main {
    /**Criação da tabela**/
    private static final String sqlCreateTable = "DROP TABLE IF EXISTS Usuario; CREATE TABLE Usuario "
            + "("
            + " ID INT PRIMARY KEY,"
            + " Primeiro_Nome varchar(100) NOT NULL, "
            + " Sobrenome varchar(100) NOT NULL, "
            + " Idade INT NOT NULL "
            + ")";

    /**Preenchimento da tabela**/
    private static final String sqlInsert1 =  "INSERT INTO Usuario (ID, Primeiro_Nome, Sobrenome, Idade) VALUES (1, 'Maria', 'Aparecida', 50)";
    private static final String sqlInsert2 =  "INSERT INTO Usuario (ID, Primeiro_Nome, Sobrenome, Idade) VALUES (1, 'Marta', 'Kubota', 74)";
    private static final String sqlInsert3 =  "INSERT INTO Usuario (ID, Primeiro_Nome, Sobrenome, Idade) VALUES (3, 'Jorge', 'Camargo', 17)";
    private static final String sqlInsert4 =  "INSERT INTO Usuario (ID, Primeiro_Nome, Sobrenome, Idade) VALUES (5, 'Ingrid', 'Brandão', 35)";
    private static final String sqlInsert5 =  "INSERT INTO Usuario (ID, Primeiro_Nome, Sobrenome, Idade) VALUES (6, 'Charles', 'Lima', 42)";
    private static final String sqlInsert6 =  "INSERT INTO Usuario (ID, Primeiro_Nome, Sobrenome, Idade) VALUES (6, 'Mickael', 'Soares', 28)";

    /**Exclusão de funcionários**/
    private static final String sqlDelete =  "DELETE FROM Usuario WHERE ID=3";
    private static final String sqlDelete2 = "DELETE FROM Usuario WHERE Sobrenome = 'Camargo'";

    /**Edição de funcionários**/
    private static final String sqlUpdate = "UPDATE Usuario SET Sobrenome = 'Martins' WHERE ID = 2";

    private static final Logger logger = Logger.getLogger(Main.class);

    public static void main(String[] args) throws Exception{
        Connection connection = null;

        try {
            connection = getConnection();

            Statement statement = connection.createStatement();

            statement.execute(sqlCreateTable);
            logger.info("Tabela Usuário criada");

            statement.execute(sqlInsert1);
            logger.info("Usuário 1 inserido!");
            statement.execute(sqlInsert2);
            logger.info("Usuário 2 inserido!");
            statement.execute(sqlInsert3);
            logger.info("Usuário 3 inserido!");
            statement.execute(sqlInsert4);
            logger.info("Usuário 4 inserido!");
            statement.execute(sqlInsert5);
            logger.info("Usuário 5 inserido!");
            statement.execute(sqlInsert6);
            logger.info("Usuário 6 inserido!");

            statement.execute(sqlDelete);
            logger.info("Usuário 2 deletado!");

            statement.execute(sqlDelete2);
            logger.info("Usuário deletado com sucesso!");

            statement.execute(sqlUpdate);
            logger.debug("Usuário atualizado com sucesso!");

        } catch (JdbcSQLIntegrityConstraintViolationException erro) {
            logger.error("Primary key repetida!");
        } catch (Exception e) {
            logger.error("Algo está estranho...");
            e.printStackTrace();
        } finally {
            if (connection != null)
                connection.close();
        }
    }

    public static Connection getConnection() throws Exception {
        /**Conexão com Banco de dados**/
        Class.forName("org.h2.Driver").newInstance();
        return DriverManager.getConnection("jdbc:h2:~/test", "root", "");
    }
}