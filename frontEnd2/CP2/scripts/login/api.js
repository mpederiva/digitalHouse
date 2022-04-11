/* Quando queremos Cadastrar Novo usuário*/

let primeiroNome = document.getElementById('inputName');
let ultimoNome = document.getElementById('inputLastName');
let emailLogin = document.getElementById('inputEmail');
let passwordLogin = document.getElementById('inputPassword');
let botaoSalvar = document.getElementById('botaoSalvar');

//criando o objeto que comtempla o email,senha, primeiro nome e último nome do usuário//

let objetoUsers: {
    firstname = " ",
    lastname = " ",
    email = " ",
    password = " ";
}

botaoSalve.addEventListener('click', function(event) {
    event.preventDefault();
    objetoUsers.firstname = primeiroNome.value;
    objetoUsers.lastname = ultimoNome.value;
    objetoUsers.email = emailLogin.value;
    objetoUsers.password = passwordLogin.value;
    let Users = JSON.stringify(objetoUsers);

    /*INCLUIR API COM UM users - cadastrar Novo  recurso*/
    let urlUsers = "https://ctd-todo-api.herokuapp.com/v1/users";
    let configDarequ = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: {
            objetoUsers;
        }
        fetch(urlUsers, configDarequ)
        .then(result => {
            return result.json();
        }).then(
            result => {
                console.log(result.jwt);
            }
            ).catch(errou => {
                console.log(errou);
            }),
    };
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
//Declaração de variaveis API users / login //
let emailLogin = document.getElementById('inputEmail');
let passwordLogin = document.getElementById('inputPassword');
let botaoSalvar = document.getElementById('botaoSalvar');
//criando o objeto que comtempla o email,senha de usuário já existente //
let objetoUsersLogin: {
    email = " ",
    password = " ";
}

botaoSalvar.addEventListener('click', function(event) {
    event.preventDefault();
    objetoUsersLogin.email = emailLogin.value;
    objetoUsersLogin.password = passwordLogin.value;
    let UsersLogin = JSON.stringify(objetoUsersLogin);
    
    /*INCLUIR API COM UM usuario já cadastrado users/login*/
    let UrlUsersLogin = "https://ctd-todo-api.herokuapp.com/v1/users/login";
    let configDaRequ = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: {
            objetoUsersLogin:
        }
        fetch(UrlUsersLogin, configDaRequ)
        .then(resultado => {
            return resultado.json();
        }).then(
            result => {
                console.log(resultado.jwt);
            }
            ).catch(errou => {
                console.log(errou);
            }),
        };
    });
        
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
//Declarando variaveis API GET ME //
        let identificador = document.getElementById('inputId');
        let primeiroName = document.getElementById('inputName');
        let ultimoNome = document.getElementById('inputLastName');
        let email = document.getElementById('inputEmail');
        
        /*INCLUIR API DADOS DO USUARIO GET ME*/
        if (identificador.value != "") {
            
            //executar a busca na API//
            fetch = ("https: //ctd-todo-api.herokuapp.com/v1/users/getMe");
            .then(function(result => {
                return result.primeiroNome();
            })
            .then(result => {
                return result.ultimoNome;
            })
            .then(result => {
                return result.email();
                console.log(result);
            })
        }).catch(errou => {
            console.log(errou);
        });
    };

    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
    //Declaração de variaveis API Criar uma tarefa //
    let idTarefa = document.getElementById('idTarefa');
    let descrever = document.querySelectorAll('descricao');
    let nomeTarefa = document.getElementById('nometarefa');
    let dataCriacao = document.getElementById('timestamp');
    let botaoSalvarNova = document.getElementById('Task');
    
    console.log(description);
    
    console.log(nomeTarefa);
    
    console.log(dataCriacao);
    
    //criando o objeto que comtempla a criação de uma nova Tarefa //
    
    let objetoNewTask: {
        "id" = "",
        "description" = " ",
        "completed" = "false",
        "userId" = "",
        "createdAt" = ""
    }
    
    botaoSalvarNova.addEventListener('click', function(event) {
        event.preventDefault();
        let NovasTarefas = JSON.stringify(objetoNewTask);
        objetoNewTask.id = idTarefa.value;
        objetoNewTask.description = descrever.value;
        objetoNewTask.userId = identificador.value;
        objetoNewTask.createAt = dataCriacao.value;
        
        if (objetoNewTask.completed) {
            let urlTasks = "https://ctd-todo-api.herokuapp.com/v1/tasks";
            let configuracao = {
                method: "POST",
                headers: {
                    "Authorization": "jwt"
                },
                body: {
                    "description" = " ",
                    "completed" = "false",
                }
                fetch(urlTasks, configuracao)
                .then(resultado => {
                    return resultado.json();
                }).then(
                    resultado => {
                        console.log(resultado.Authorization);
                    }
                    ).catch(errou => {
                        console.log(errou);
                    });
                };
                );
            }
            
            //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
            //Declaração de variaveis API Lista de tarefas tasks - method Get //
            let newTask = document.getElementById('inputnovaTarefa');
            let tarefasPendentesLi = document.querySelectorAll('li');
            let botaoSalvarNova = document.getElementById('botaoTask');
            console.log(tarefasPendentesLi);
            //criando o objeto que comtempla a criação de uma Lista de Tarefas//
            let objetoListaTask: {
                "id" = "",
                "description" = " ",
                "completed" = "false",
                "userId" = "",
                "createdAt" = ""
            }
            botaoSalvarNova.addEventListener('click', function(event) {
                event.preventDefault();
                let lista = JSON.stringify(objetoListaTask);
                objetoListaTask.id = idTarefa.value;
                objetoListaTask.description = descrever.value;
                objetoListaTask.userId = identificador.value;
                objetoListaTask.createAt = dataCriacao.value;

                if (objetoListaTask.completed) {
                    fetch("https://ctd-todo-api.herokuapp.com/v1/tasks");
                    let configuracao = {
                        method: "GET",
                        headers: {
                            "Authorization": "jwt"
                            .then(resultado => {
                                return resultado.json();
                            })
                            .then(resultado => {
                                return objetoListaTask.id();
                            })
                            .then(resultado => {
                                return objetoListaTask.description();
                            })
                            .then(resultado => {
                                return objetoListaTask.userId();
                            })
                            .then(resultado => {
                                return objetoListaTask.createdAt();  
                            }).catch(errou => {
                                console.log(errou);
                            });
                        });
                    }
                });
                
                //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
                //declaração de variaveis para obter uma tarefa method GET//
                let newTask = document.getElementById('inputnovaTarefa');
                let identfTarefa = document.getElementById(idTarefa);
                let botaoSalvarNova = document.getElementById('botaoTask');
                
                console.log(idTarefa);
                
                //criando o objeto que comtempla a criação de uma Lista de Tarefas//
                
                let objetoobterTask: {
                    "id" = "",
                    "description" = " ",
                    "completed" = "false",
                    "userId" = "",
                    "createdAt" = ""
                }
                botaoSalvarNova.addEventListener('click', function(event) {
                    event.preventDefault();
                    if (objetoListaTask.completed) {
                        fetch("https://ctd-todo-api.herokuapp.com/v1/tasks/{id}");
                        let configuracao = {
                            method: "GET",
                            headers: {
                                "Authorization": "jwt"
                                .then(resultado => {
                                    return resultado.json();
                                })
                                .then(resultado => {
                                    return objetoListaTask.id();
                                }) oListaTask.createdAt();  
                            }).catch(errou => {
                                console.log(errou);
                            });
                        });
                    }
                });
                
                //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
                //declaração de variaveis metodo PUT api //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
                //declaração de variaveis para MODIFICAR  uma tarefa method PUT//
                let identfTarefa = document.getElementById(idTarefa);
                let botaoSalvarNova = document.getElementById('botaoTask');

                console.log(idTarefa);
                let objetoobterTask: {
                    "id" = "",
                    "description" = " ",
                    "completed" = "false",
                    "userId" = "",
                    "createdAt" = ""
                }
                if (objetoNewTask.completed) {
                    fetch = "https://ctd-todo-api.herokuapp.com/v1/tasks/{id}";
                    let configuracao = {
                        method: "PUT",
                        headers: {
                            "Authorization": "jwt"
                        },
                        body: {
                            "description" = " ",
                            "completed" = "false",
                        }
                        .then(resultado => {
                            return resultado.json();
                        }).then(
                            resultado => {
                                console.log(resultado.Authorization);
                            }
                            ).catch(errou => {
                                console.log(errou);
                            });
                        };
                    });
                    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX//
                    //declaracao  de variaveis para eliminar tarefa - API DELETE//
                    let identfTarefa = document.getElementById(idTarefa);
                    let botaoSalvarNova = document.getElementById('botaoTask');
                    console.log(idTarefa);
                    let objetoEliminarTask: {
                        "id" = "",
                        "description" = " ",
                        "completed" = "false",
                        "userId" = "",
                        "createdAt" = ""
                    }
                    if (objetoEliminarTask.completed) {
                        fetch = "https://ctd-todo-api.herokuapp.com/v1/tasks/{id}";
                        let configuracao = {
                            method: "DELETE",
                            headers: {
                                "Authorization": "jwt"
                            },
                            body: {
                                "description" = " ",
                                "completed" = "false",
                            }
                            .then(resultado => {
                                return resultado.json();
                            }).then(
                                resultado => {
                                    console.log(resultado.Authorization);
                                }
                                ).catch(errou => {
                                    console.log(errou);
                                });
                            };
                        });