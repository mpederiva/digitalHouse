create table if not exists endereco (idEndereco int auto_increment primary key, rua varchar(255), numero INT, cidade varchar(255), bairro varchar(255));


CREATE TABLE IF NOT EXISTS paciente (
  idPaciente INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  sobrenome VARCHAR(100),
  data DATE,
  idEndereco INT,
  FOREIGN KEY (idEndereco) REFERENCES endereco(idEndereco));