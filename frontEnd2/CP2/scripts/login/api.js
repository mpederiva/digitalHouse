// Quando queremos Cadastrar Novo usuário * /

let primeiroNome = document.getElementById('inputName');
let ultimoNome = document.getElementById('inputLastName');
let emailLogin = document.getElementById('inputEmail');
let passwordLogin = document.getElementById('inputPassword');
let btnCadastro = document.getElementById('botaoCadastro');

//criando o objeto que comtempla o email,senha, primeiro nome e último nome do usuário//
let objetoUsers = {
    "firstname": "",
    "lastname": " ",
    "email": "",
    "password": "",
}

btnCadastro.addEventListener('click', function(event) {
    event.preventDefault();
    objetoUsers.firstname = primeiroNome.value;
    objetoUsers.lastname = ultimoNome.value;
    objetoUsers.email = emailLogin.value;
    objetoUsers.password = passwordLogin.value;
    let Users = JSON.stringify(objetoUsers);

    /*INCLUIR API COM UM users - cadastrar Novo  recurso*/
    //incluindo validações na APi 
    //Code: 200 - Operação Sucesso;
    //400 - Usuário já existe;
    //500 - Error del servidor //

    let urlUsers = ("https://ctd-todo-api.herokuapp.com/v1/users");
    let configDaRequ = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: objetoUsers
        fetch(urlUsers, configDaRequ),
        then(
            result => {
                if (result.status == 201 || result.status == 200)
                    return result.json();
            }
            //Se for diferente destas duas opções caimos no throw para a execução cair no Catch*/
            throw resposta;
        ).then(function(resposta) {
            userSucess(resposta.jwt);
            console.log(resposta.jwt);
        })
        .catch(errou => {
            userErro(errou);
            console.log(errou);
        });
    }
    else {
        alert("Todos os campos devem ser preenchidos para prosseguir");
    }
});

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
//Declaração de variaveis API users / login //
let emailLogin = document.getElementById('inputEmail');
let passwordLogin = document.getElementById('inputPassword');
let botaoSalvar = document.getElementById('botaoSalvar');

//criando o objeto que contempla o email,senha de usuário já existente //
let objetoUsersLogin = {
    "email": "",
    "password": ""
}

botaoSalvar.addEventListener('click', function(event) {
        event.preventDefault();
        objetoUsersLogin.email = emailLogin.value;
        objetoUsersLogin.password = passwordLogin.value;
        let usersLogin = JSON.stringify(objetoUsersLogin);

        //INCLUIR API COM UM usuario já cadastrado users / login * /
        //validar as APIs //incluindo validações na APi 
        //Code: 200 - Operação Sucesso;
        //400 - Senha incorreta;
        //404 Usuario não existe
        //500 - Error del servidor //

        let urlUsersLogin = "https://ctd-todo-api.herokuapp.com/v1/users/login";
        let configDaRequ = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }

            body: objetoUsersLogin

                fetch(urlUsersLogin, configDaRequ).then(
                result => {
                    if (result.status == 201 || result.status == 200)
                        return result.json();
                }
                //Se for diferente destas duas opções caimos no throw para a execução cair no Catch*/
                throw resposta;
            ).then(function(resposta) {
                loginSucess(resposta.jwt);
                console.log(resposta.jwt);
            }).catch(errou => {
                loginErro(errou);
                console.log(errou);
            });
        };

        //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
        //Declarando variaveis API GET ME //

        let primeiroName = document.getElementById('inputName');
        let ultimoNome = document.getElementById('inputLastName');
        let email = document.getElementById('inputEmail');

        /*INCLUIR API DADOS DO USUARIO GET ME*/
        //incluindo validações na APi 
        //Code: 200 - Operação Sucesso;
        //404- Usuário não existe;
        //500 - Error del servidor //
        // armazenar o token na variavel atraves do Local storage session storage//

        let token = localStorage.getItem("jwt");

        //executar a busca na API//
        let urlUsersBuscar = "https://ctd-todo-api.herokuapp.com/v1/users/getMe";
        let configDaRequ = {
            method: "GET",
            headers: token
            fetch(urlUsersBuscar, configDaRequ).then(
                result => {
                    if (result.status == 201 || result.status == 200)
                        return result.json();
                }
                //Se for diferente destas duas opções caimos no throw para a execução cair no Catch*/
                throw resposta;
            ).then(function(result) {
                result.email();
                buscarSucess(result.jwt);
                console.log(result.jwt);

            }).then(function(result) {
                result.primeiroNome();
                buscarSucess(result.jwt);
                console.log(result.jwt);

            }).then(function(result) {
                result.ultimoNome();
                buscarSucess(result.jwt);
                console.log(result.jwt);

            }).catch(errou => {
                buscarErro(errou);
                console.log(errou);
            });
        };
    };

    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
    //Declaração de variaveis API Criar uma tarefa //

    let descrever = document.querySelectorAll('description');
    let nomeTarefa = document.getElementById('nometarefa');

    let botaoSalvarNova = document.getElementById('task');

    console.log(description);

    console.log(nomeTarefa);

    console.log(dataCriacao);

    //criando o objeto que comtempla a criação de uma nova Tarefa //
    let objetoNewTask: {
        "description": " ",
        "completed": "false",
        "createdAt": ""
    }

    botaoSalvarNova.addEventListener('click', function(event) {
            event.preventDefault();

            let NovasTarefas = JSON.stringify(objetoNewTask);

            objetoNewTask.description = descrever.value;
            objetoNewTask.createAt = dataCriacao.value;

            let token = localStorage.getItem("jwt");
            if (objetoNewTask.completed) {
                let urlNewTasks = "https://ctd-todo-api.herokuapp.com/v1/tasks";
                let configuracao = {
                    method: "POST",
                    headers: token

                        body: {
                        "description" = " ",
                        "completed" = false
                    }

                        fetch(urlNewTasks, configuracao).then(
                        result => {
                            if (result.status == 201 || result.status == 200)
                                window.alert("Tarefa Criada com Sucesso");
                            return resultado.json();

                        }
                        throw resposta;
                    ).then(function(resposta) {
                        tarefaSucess(resposta.jwt);
                        console.log(resposta.jwt);
                    }).catch(errou => {
                        tarefaErro(errou);
                        console.log(errou);
                    });
                };
            };
        }
        //Percorrer array çista de tarefas//
        //Declaração de variaveis API obter Lista de tarefas tasks - method Get //
        let newTask = document.getElementById('inputnovaTarefa');
        let tarefasPendentesLi = document.querySelectorAll('li');
        let botaoSalvarNova = document.getElementById('botaoTask');

        console.log(tarefasPendentesLi);

        //criando o objeto que comtempla a criação de uma Lista de Tarefas//
        let objetoListaTask: {

            "description" = " ",
            "completed" = "false",

        }

        botaoSalvarNova.addEventListener('click', function(event) {
                event.preventDefault();

                let lista = JSON.stringify(objetoListaTask);
                objetoListaTask.description = descrever.value;


                let token = localStorage.getItem("jwt");
                if (objetoListaTask.completed) {
                    let urlListaTasks = ("https://ctd-todo-api.herokuapp.com/v1/tasks");
                    let configuracao = {
                        method: "GET",
                        headers: token
                        fetch(urlListaTasks, configuracao).then(
                            result => {
                                if (result.status == 201 || result.status == 200)
                                    window.alert("Obtendo Lista de Tarefas Sucesso");
                                return resultado.json();
                            }
                            throw resposta;
                        ).then(function(resposta) {
                            tarefaListaSucess(resposta.jwt);
                            console.log(resposta.jwt);
                        }).catch(errou => {
                                tarefaListaErro(errou);
                                console.log(errou);
                            }
                        }
                    }
                }
            }
        }
    }
}


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
//declaração de variaveis para obter uma tarefa method GET//
let newTask = document.getElementById('inputnovaTarefa');
let identfTarefa = document.getElementById('idTarefa');
let botaoSalvarNova = document.getElementById('botaoTask');

console.log(idTarefa);

//criando o objeto que comtempla a criação para obter uma Tarefa ela  chamada atraves do id da tarefa usar template string//
let objetoObterTask: {
    "description" = " ",
    "completed" = false,

}
botaoSalvarNova.addEventListener('click', function(event) {
        event.preventDefault();

        let token = localStorage.getItem("jwt");
        if (objetoObterTask.completed) {
            let urlObterTarefa = ("https://ctd-todo-api.herokuapp.com/v1/tasks/´$id´");
        }
        let configuracao = {
            method: "GET",
            headers: token

                fetch(urlObterTarefa, configuracao).then(
                result => {
                    if (result.status == 201 || result.status == 200)
                        return resultado.json();
                    window.alert("Obtendo Tarefas com Sucesso");
                }) throw resposta;
        ).then(function(resposta) {
            tarefaObterSucess(resposta.jwt);
            console.log(resposta.jwt);
        }).catch(errou => {
                tarefaObterErro(errou);
                console.log(errou);
            }
        }
    };
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
declaração de variaveis metodo PUT api chamada atraves do id da tarefa usar template string ///xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//

//declaração de variaveis para MODIFICAR  uma tarefa method PUT//
let identfTarefa = document.getElementById('idTarefa');
let botaoSalvarNova = document.getElementById('botaoTask');

console.log(idTarefa);

let objetoobterTask: {

    "description" = " ",
    "completed" = "false",

}
let token = localStorage.getItem("jwt");
if (objetoNewTask.completed) {
    let urlModifiqueTask = "https://ctd-todo-api.herokuapp.com/v1/tasks/´$id´";
    let configuracao = {
        method: "PUT",
        headers: token

            body: {
            "description" = " ",
            "completed" = false
        }


            fetch(urlModifiqueTask, configuracao).then(
            result => {
                if (result.status == 201 || result.status == 200)
                    window.alert("Modificando Tarefas com Sucesso");
                return resultado.json();
            })
        throw resposta
    ).then(function(resposta) {
        tarefaModifiqSucess(resposta.jwt);
        console.log(resposta.jwt);
    }).catch(errou => {
            tarefaModifiqErro(errou);
            console.log(errou);
        };
    }
}


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX//
//declaracao  de variaveis para eliminar tarefa - API DELETE//
let identfTarefa = document.getElementById(idTarefa);
let botaoSalvarNova = document.getElementById('botaoTask');

console.log(idTarefa);

let objetoEliminarTask: {

    "description" = " ",
    "completed" = "false",
}
let token = localStorage.getItem("jwt");
if (objetoEliminarTask.completed) {
    let urlDeleteTask = "https://ctd-todo-api.herokuapp.com/v1/tasks/´$id´";
    let configuracao = {
        method: "DELETE",
        headers: token

            body: {
            "description" = " ",
            "completed" = false,
        }
        throw resposta;
    ).then(function(resposta) {
        tarefaDeletarSucess(resposta.jwt);
        console.log(resposta.jwt);
    }).catch(errou => {
            tarefaDeleteErro(errou);
            console.log(errou);
        }
    });
}

//Primeiro fazemos umalista de tarefas//# Primeiro eu fiz uma lista com dicionários - eles são os nomes dos deputados e o link da API respectiva de cada um. Os parâmetros foram json, número de itens por página e o número da página (são mais de 500 deputados, então são seis páginas