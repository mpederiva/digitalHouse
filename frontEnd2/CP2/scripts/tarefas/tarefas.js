// buscar token jwt de usuario que tem cadastro //
onload = function() {
    let tokenUserjwt = this.localStorage.getItem("jwt");

    //e o tokes wt for vazio ou diferente do token do usuario//
    if (!tokenUserjwt) {
        window.alert("Você não tem permissão para acessar esta página. Favor retornar para a página de login inicial.");
    } else if (tokenUserjwt = "") {
        window.alert("Você não tem permissão para acessar esta página. Favor retornar para a página de login inicial.");
    } else {
        console.log(tokenUserjwt);
    }
}

//Carrega e altera dados do usuário logado - pega o endpoint//
async function buscaUsuarioNaApi(tokenJwtArmazenado) {
    let urlGetUsuario = "https://ctd-todo-api.herokuapp.com/v1/users/getMe";
    let configuracaoRequisicao = {
        headers: {
            "Authorization": '${tokenJwtArmazenado}',
        },
    };
    let resposta;
    let respostaJson

    try {
        resposta = await fetch(urlGetUsuario, configuracaoRequisicao);
        if (resposta.status == 200) {
            respostaJson = await resposta.json();
            alteraDadosUsuarioEmTela(respostaJson);
        } else {
            throw resposta.status
        }
    } catch (error) {
        let escolhaUsuario = confirm("Ocorreu algum erro ao buscar as informações deste usuário")
        console.log(error);
        if (escolhaUsuario) {
            buscaUsuarioNaApi(cookieJwt);
        }
    }
}

function alteraDadosUsuarioEmTela(objetoUsuarioRecebido) {
    let nomeUsuarioEmTarefas = document.getElementById('nomeUsuarioEmTarefas');
    nomeUsuarioEmTarefas.innerText = '${objetoUsuarioRecebido.firstName} ${objetoUsuarioRecebido.lastName}'
}

//Busca todas as tarefas do usuário logado//
function buscaAsTarefasDoUsuario(tokenJwtArmazenado) {
    let urlGetTarefas = "https://ctd-todo-api.herokuapp.com/v1/tasks";
    let configuracaoRequisicao = {
        //como é um get, eu passo só o cabeçalho do token 
        headers: {
            'Authorization': `${tokenJwtArmazenado}`,
        },
    };
    fetch(urlGetTarefas, configuracaoRequisicao).then(
        resultado => {
            if (resultado.status == 200) {
                return resultado.json();
            }
            throw resultado.status;
        }
    ).then(
        resultado => {
            manipulandoTarefasUsuario(resultado);
        }
    ).catch(
        erros => {
            console.log(erros);
        }
    );
}

function manipulandoTarefasUsuario(listaDeTarefas) {
    console.log(listaDeTarefas);
}

//Cadastra nova tarefa para usuário
let botaoTask = document.getElementById("Task");

botaoTask.addEventListener('click', evento => {
    let tarefaNova = document.getElementById("novaTarefa");

    if (tarefaNova.value != "") {
        const objetoTarefa = {
            description: botaoTask.value,
        }
    }
})