//funções para validaçãodas apis//

// Api users//
function userSucess(jwtRecebido) {
    console.log("Jwt que recebemos ao se cadastrar ");
    windows.alert("A inclusão do Usuário cadastrado foi efetuada com sucesso");
    //atuaizar a localstrage não perde a Informação//
     ocalStorage.setItem("jwt", jwtRecebido);

    //Mandar o usuario para a pagina tarefas.html//
    window.location.href = "tarefas.html";
}

function userErro(errou) {
    if (result.status == 400) {
        alert("Usuário já esta cadastrado");
    }else {
    if (result.status == 500)
        window.alert("Erro no Servidor,favor reiniciar a pagina");
}
}

//api users/login//
function loginSucess(jwtRecebido) {
    console.log("Jwt autorization que recebemos ao efetuar o login  ");
    console.log(jwtRecebido);
    window.alert("USUÁRIO LOGADO COM SUCESSO");

    //atuaizar a localstrage não perde a Informação//
    localStorage.setItem("jwt", jwtRecebido);

    //Mandar o usuario para a pagina tarefas.html//
    window.location.href = "tarefas.html";
}

//duvida como declarar esta certo?//
function loginErro(errou) {
    let validarLogin = document.getElementById("passwordValidacao");

    //Limpa campo de senha e email ao errar o login//

    if (resposta.status == 400) {
        window.alert("Os dados do usuário foram digitados incorretamente.");
        emailLogin.value = "";
        passwordLogin.value = "";
    } else if (resposta.status == 404){
            window.alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
        emailLogin.value = "";
    } else if (resposta.status == 500){
        window.alert("Erro no Servidor,favor reiniciar a pagina");
    }
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//Funções da API Get/me
function buscarSucess(jwtRecebido) {
    console.log("Jwt autorization que recebemos referente ao usuário logado");
    console.log(jwtRecebido);

    //atuaizar a localstrage não perde a Informação//
    localStorage.setItem("jwt", jwtRecebido);

    //duvida para onde usuario será direcionado
    // window.location.href = ".html"; //
}

function buscarErro(errou) {
    let emailLogin = document.getElementById("emailValidacao");

    //Limpa campo de  email ao errar o login//

    if (resposta.status == 404){
        window.alert("Email incorreto, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
        emailLogin.value = "";
    } else if (resposta.status == 500){
        window.alert("Erro no Servidor,favor reiniciar a pagina");
    }
}

//funcoes api criar tarefas// 
function tarefaSucess(jwtRecebido) {
    console.log("Jwt autorization que recebemos ao efetuar o login  ");
    console.log(jwtRecebido);

    //atuaizar a localstrage não perde a Informação//
    localStorage.setItem("jwt", jwtRecebido);

    //Mandar o usuario para a pagina tarefas.html//
    window.location.href = "tarefas.html";
}

//duvida como declarar esta certo?//
function tarefaErro(errou) {
    let emailLogin = document.getElementById("emailValidacao");
    let passwordLogin = document.getElementById("passwordValidacao")
    
    //Limpa campo de senha e email ao errar o login//
    if (resposta.status == 400) {
        window.alert("Os dados do usuario estao incompletos ");
        emailLogin.value = "";
        passwordLogin.value = "";
    } else if (resposta.status == 401){
            window.alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
        emailLogin.value = "";
        passwordLogin.value = "";
    }else if (resposta.status == 500){
        window.alert("Erro no Servidor,favor reiniciar a pagina");
    }
}

//funcoes api lista de tarefas// 
function tarefaListaSucess(jwtRecebido) {
    console.log("Jwt autorization que recebemos ao efetuar o login  ");
    console.log(jwtRecebido);

    //atuaizar a localstrage não perde a Informação//
    localStorage.setItem("jwt", jwtRecebido);

    //Mandar o usuario para a pagina tarefas.html//
    window.location.href = "tarefas.html";
}

//duvida como declarar esta certo?//
function tarefaListaErro(errou) {
    let emailLogin = document.getElementById("emailValidacao");
    let passwordLogin = document.getElementById("passwordValidacao")
        //Limpa campo de senha e email ao errar o login//

    if (resposta.status == 401){
        window.alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
    emailLogin.value = "";
    passwordLogin.value = "";
} else if (resposta.status == 500){
        window.alert("Erro no Servidor,favor reiniciar a pagina");
    }
}

//funcoes api obter uma tarefa// 
function tarefaObterSucess(jwtRecebido) {
    console.log("Jwt autorization que recebemos ao efetuar o login  ");
    console.log(jwtRecebido);

    //atuaizar a localstrage não perde a Informação//
    localStorage.setItem("jwt", jwtRecebido);

    //Mandar o usuario para a pagina tarefas.html//
    window.location.href = "tarefas.html";
}

//duvida como declarar esta certo?//
function tarefaObterErro(errou) {
    let identifica = document.getElementById("id");
    //como declarar//

    //Identificador invalido//
    if (resposta.status == 400) {
        window.alert("Identificador da tarefa invalido");
        identifica.value = "";

        if (resposta.status == 401)
            window.alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
        emailLogin.value = "";
        passwordLogin.value = "";
    } else if (resposta.status == 404){
            window.alert("Tarefa Inexistente, favor informar outra tarefa");
    }

    if (resposta.status == 500){
        window.alert("Erro no Servidor,favor reiniciar a pagina");
    }
}

//funcoes api modificar uma tarefa// 
function tarefaModifiqSucess(jwtRecebido) {
    console.log("Jwt autorization que recebemos ao efetuar o login ");
    console.log(jwtRecebido);

    //atuaizar a localstrage não perde a Informação//
    localStorage.setItem("jwt", jwtRecebido);

    //Mandar o usuario para a pagina tarefas.html//
    window.location.href = "tarefas.html";
}

//duvida como declarar esta certo?//
function tarefaModifiqErro(errou) {
    let identifica = document.getElementById("id");
    //como declarar//

    //Identificador invalido//
    if (resposta.status == 400) {
        window.alert("Identificador da tarefa invalido");
        identifica.value = "";

        if (resposta.status == 401)
            window.alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
        emailLogin.value = "";
        passwordLogin.value = "";
    } else if (resposta.status == 404){
            window.alert("Tarefa Inexistente, favor informar outra tarefa");
    }

    if (resposta.status == 500){
        window.alert("Erro no Servidor,favor reiniciar a pagina");
    }
}

//funcoes api Deletar uma tarefa// 
function tarefaDeletarSucess(jwtRecebido) {
    console.log("Jwt autorization que recebemos ao efetuar o login  ");
    console.log(jwtRecebido);

    //atuaizar a localstrage não perde a Informação//
    localStorage.setItem("jwt", jwtRecebido);

    //Mandar o usuario para a pagina tarefas.html//
    window.location.href = "tarefas.html";
}

//duvida como declarar esta certo?//
function tarefaDeleteErro(errou) {
    let identifica = document.getElementById("id");
    //como declarar//
    //Identificador invalido//
    if (resposta.status == 400) {
        window.alert("Identificador da tarefa invalido");
        identifica.value = "";

        if (resposta.status == 401){
            window.alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
            emailLogin.value = "";
            passwordLogin.value = "";
        } else if (resposta.status == 404){
            window.alert("Tarefa Inexistente, favor informar outra tarefa");
        }
    } else if (resposta.status == 500){
        window.alert("Erro no Servidor,favor reiniciar a pagina");
    }
}