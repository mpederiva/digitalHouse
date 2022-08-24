package paciente.service;

import paciente.dao.IDao;
import paciente.model.Endereco;

public class EnderecoService {

    private IDao<Endereco> enderecoIDao;

    public EnderecoService(IDao<Endereco> enderecoIDao) {
        this.enderecoIDao = enderecoIDao;
    }

    public Endereco salvar(Endereco endereco){
        return enderecoIDao.salvar(endereco);
    }


}

