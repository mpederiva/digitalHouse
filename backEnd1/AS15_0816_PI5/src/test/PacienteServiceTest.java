package test;

import org.junit.jupiter.api.Test;
import paciente.dao.ConfiguracaoJDBC;
import paciente.dao.impl.EnderecoIDaoImpl;
import paciente.dao.impl.PacienteIDaoImpl;
import paciente.model.Endereco;
import paciente.model.Paciente;
import paciente.service.EnderecoService;
import paciente.service.PacienteService;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

class PacienteServiceTest {

    PacienteService pacienteService = new PacienteService(new PacienteIDaoImpl(new ConfiguracaoJDBC()));
    EnderecoService enderecoService = new EnderecoService(new EnderecoIDaoImpl(new ConfiguracaoJDBC()));

    

    @Test
    public void salvarPaciente(){

        Endereco endereco1 = new Endereco("Rua A",1,"São Paulo","Liberdade");
        enderecoService.salvar(endereco1);
        Endereco endereco2 = new Endereco("Rua B",2,"Brasília","Asa Norte");
        enderecoService.salvar(endereco2);
        Endereco endereco3 = new Endereco("Rua C",3,"Belém","Pedreira");
        enderecoService.salvar(endereco3);


        Paciente paciente1 = new Paciente("Maria","Lima", LocalDate.now(), endereco1);
        pacienteService.salvar(paciente1);
        Paciente paciente2 = new Paciente("José","Martins", LocalDate.now(), endereco2);
        pacienteService.salvar(paciente2);
        Paciente paciente3 = new Paciente("Tiago","Silva", LocalDate.now(), endereco3);
        pacienteService.salvar(paciente3);

        assertTrue(paciente1.getIdPaciente()!=null);
        assertTrue(paciente2.getIdPaciente()!=null);
        assertTrue(paciente3.getIdPaciente()!=null);
    }
}