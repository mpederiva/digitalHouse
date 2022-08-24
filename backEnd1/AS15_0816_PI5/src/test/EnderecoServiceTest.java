package test;

import org.junit.jupiter.api.Test;
import paciente.dao.ConfiguracaoJDBC;
import paciente.dao.impl.EnderecoIDaoImpl;
import paciente.model.Endereco;
import paciente.service.EnderecoService;

import static org.junit.jupiter.api.Assertions.*;

class EnderecoServiceTest {

    EnderecoService enderecoService = new EnderecoService(new EnderecoIDaoImpl(new ConfiguracaoJDBC()));

    @Test
    public void salvarEndereco(){

        Endereco endereco1 = new Endereco("Rua A",1,"São Paulo","Liberdade");
        enderecoService.salvar(endereco1);
        Endereco endereco2 = new Endereco("Rua B",2,"Brasília","Asa Norte");
        enderecoService.salvar(endereco2);
        Endereco endereco3 = new Endereco("Rua C",3,"Belém","Pedreira");
        enderecoService.salvar(endereco3);
        Endereco endereco4 = new Endereco("Rua D",4,"Porto Alegre","Petrópolis");
        enderecoService.salvar(endereco4);

        assertTrue(endereco1.getIdEndereco()!=null);
        assertTrue(endereco2.getIdEndereco()!=null);
        assertTrue(endereco3.getIdEndereco()!=null);
        assertTrue(endereco4.getIdEndereco()!=null);

    }

}