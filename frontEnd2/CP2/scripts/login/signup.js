//captura dos elementos//

let nome = document.getElementById('inputName');
let sobrenome = document.getElementById('inputLastName')
let email = document.getElementById('inputEmailCadastro');
let senha = document.getElementById('inputPassword');
let repetirSenha = document.getElementById('inputRepeatPassword');
let cadastrar = document.getElementById('botaoCadastro');
let botaoValida = document.getElementById('validarSenha');

let nomeCadastroNormalizado;
let sobrenomeCadastroNormalizado;
let emailCadastroNormalizado;
let passwordCadastroNormalizado;

let nomeValido = false;
let sobrenomeValido = false;
let emailCadastroValido = false;
let passwordCadastroValido = false;
let repetirPasswordValido = false;

/*Desabilita o botão  de validação da senha e do cadastro ao iniciar a página*/

botaoValida.setAttribute('disabled', true);
botaoValida.innerText = "Bloqueado"
cadastrar.setAttribute('disabled', true);
cadastrar.innerText = "Bloqueado"


//validacao da senha  utilizando metodo match//
function validaSenha() {
    //criando referencia aos elementos de captura da função//
    //informa resposta pro usuário referencia a sua senha //
    var respostaUsuario = document.getElementById('resposta');
    var inputSenha = document.getElementById('inputPassword');
    // obtem o conteudo da senha obtido//
    let senha = inputPassword.value;
    let erros = []; // vetor de erros//

    //Verifica se o tamanho da senha é invalido //
    if (senha.length < 8 || senha.length > 10) {
        erros.push("Possuir entre 8 e 15 caracteres");
    }
    //verifica se não possui numeros //
    if (senha.match(/[0-9]/g) == null) {
        erros.push("deve possui números (no mínimo, 1)");
    }

    //verfica se não possui letras minusculas//]
    if (!senha.match(/[a-z]/g)) {
        erros.push("possuir letras minúsculas(no mínimo,1)");
    }

    //verifica se nao possui letras maiusculas ou se possui apenas 1//

    if (!senha.match(/[A-Z]/g) || (senha.match(/[A-Z]/g)).length == 1) {
        erros.push("possuir letras maiusculas(no mínimo,2)");
    }

    //verifica se possui simbolos ou ""//
    if (!senha.match(/[A-Z]/g) || (senha.match(/[A-Z]/g)).length == 1) {
        erros.push("possuir simbolos(no mínimo,2)");
    }
    //se vetor esta vazio (significa que não foram encontrados erros)
    if (erros.length == 0) {
        respostaUsuario.textContent = "ok! Senha Valida!"
    } else {
        respostaUsuario.textContent = "Erro...A senha deve " + erros.join(",")
    }
}

senha.addEventListener('blur', function() {
    //Capturando o elemento <Small> do html
    let passwordValidar = document.getElementById('passwordValidacao');

    if (senha.value != " ") {
        //Password tem alguma informação
        passwordValidar.innerText = " ";
        passwordValidar.style.border = ``;
        passwordValidar.style.backgroundColor = "green";
        passwordCadastroValido = true;
    } else {
        //Senha está vazio
        passwordValidar.innerText = "Senha obrigatória";
        passwordValidar.style.color = "#E01E1E";
        passwordValidar.style.fontSize = "10"
        passwordValidar.style.fontWeight = "italic"
        passwordValidar.style.border = `2px solid #E01E1E`
        passwordValidar.style.backgroundColor = "red";
        passwordCadastroValido = false;
    }
    validaSenha();
    validaTelaDeCadastro();
});

repetirSenha.addEventListener('blur', function() {
    //Capturando o elemento <Small> do html
    let repetirPasswordValidar = document.getElementById('repetirPasswordValidacao');

    //verificando se as duas senhas digitadas são iguais
    if (senha.value == repetirSenha.value) {
        window.alert("Senhas digitadas identicas , prosseguir no cadastramento");
        passwordCadastroValido = true;
        repetirPasswordValido = true;
        //caso as senhas sejam diferentes apagamos os campos preenchidos
    } else {
        window.alert("Senhas digitadas não são identicas , refazer a digitação por gentileza.");
        passwordValidar.innerText = " ";
        repetirPasswordValidar.innerText = "";
        passwordCadastroValido = false;
        repetirPasswordValido = false;
    }

    if (repetirSenha.value != " ") {
        //repetir a Password tem alguma informação
        console.log("esta preenchido");
        repetirPasswordValidar.innerText = "";
        repetirPasswordValidar.style.border = ``;
        repetirPasswordValidar.style.backgroundColor = "green";
        repetirPasswordValido = true;
    } else {
        //Senha está vazio
        repetirPasswordValidar.innerText = "Obrigatório repetir a mesma Senha";
        repetirPasswordValidar.style.color = "#E01E1E";
        repetirPasswordValidar.style.fontSize = "10"
        repetirPasswordValidar.style.fontWeight = "italic"
        repetirPasswordValidar.style.border = `2px solid #E01E1E`
        repetirPasswordValido = false;
    }
    validaSenha();
    validaTelaDeCadastro();
});


const cadastroObjeto = {
    nome: "",
    sobrenome: "",
    email: "",
    password: ""
}

nome.addEventListener('blur', function() { //Capturando o elemento <Small> do html
    let nomeValidar = document.getElementById('nomeValidacao');
    if (nome.value != "") {
        //nome tem informação
        nomeValidar.innerText = "";
        nomeValidar.style.border = ``;
        nomeValido = true;
    } else {
        //nome está vazio
        nomeValidar.innerText = "Campo obrigatório";
        nomeValidar.style.color = "#E01E1E";
        nomeValidar.style.fontSize = "8";
        nomeValidar.style.fontWeight = "bold";
        nomeValidar.style.border = `1px solid #E01E1E`;
        nomeValido = false;
    }
    validaTelaDeCadastro();
});


sobrenome.addEventListener('blur', function() {
    let sobrenomeValidar = document.getElementById('sobrenomeValidacao');
    if (sobrenome.value != "") {
        //nome tem informação
        sobrenomeValidar.innerText = "";
        sobrenomeValidar.style.border = ``;
        sobrenomeValido = true;
    } else {
        //sobrenome está vazio
        sobrenomeValidar.innerText = "Campo obrigatório";
        sobrenomeValidar.style.color = "#E01E1E";
        sobrenomeValidar.style.fontSize = "8";
        sobrenomeValidar.style.fontWeight = "bold";
        sobrenomeValidar.style.border = `1px solid #E01E1E`;
        sobrenomeValido = false;
    }
    validaTelaDeCadastro();
});

email.addEventListener('blur', function() {
    let emailValidar = document.getElementById('emailValidacao');
    if (email.value != "") {
        //nome tem informação
        emailValidar.innerText = ""
        emailValidar.style.border = ``
        emailCadastroValido = true;
    } else {
        //nome está vazio
        emailValidar.innerText = "Campo obrigatório";
        emailValidar.style.color = "#E01E1E";
        emailValidar.style.fontSize = "8";
        emailValidar.style.fontWeight = "bold";
        emailValidar.style.border = `1px solid #E01E1E`;
        emailCadastroValido = false;
    }
    validaTelaDeCadastro();
});


function validaTelaDeCadastro() {
    if (nomeValido && sobrenomeValido && emailCadastroValido && passwordCadastroValido && repetirPasswordValido) {
        cadastrar.removeAttribute('disabled')
        cadastrar.innerText = "Cadastrar"
        return true
    } else {
        cadastrar.setAttribute('disabled', true);
        cadastrar.innerText = "Bloqueado"
        return false
    }
}