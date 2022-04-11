/*Capturando os campos do formulário*/
let emailLogin = document.getElementById('inputEmail');
let passwordLogin = document.getElementById('inputPassword');
let botaoSalvar = document.getElementById('botaoSalvar');

let emailLoginNormalizado;
let passwordLoginNormalizado;

let emailEValido = false;
let passwordEValido = false;

/*Desabilita o botão ao iniciar a página*/

botaoSalvar.setAttribute('disabled', true);
botaoSalvar.innerText = "Bloqueado";

/*Cria o objeto que representa o login do usuário*/

const usuarioObjeto = {
  email: " ",
  password: " "
}

//Executa ao clicar no botão de Acessar
botaoSalvar.addEventListener('click', function(evento) {
  //Se a validação passar, se for true o retorno da função....
  if (validaTelaDeLogin()) {

    //Normalizando - Retirando os espaços em branco
    emailLoginNormalizado = retiraEspacosDeUmValorInformado(emailLogin.value);
    passwordLoginNormalizado = retiraEspacosDeUmValorInformado(passwordLogin.value);
    emailLoginNormalizado = converteValorRecebidoEmMinusculo(emailLoginNormalizado);

    //Atribui as variáveis normalizadas ao objeto do login
    usuarioObjeto.email = emailLoginNormalizado;
    usuarioObjeto.password = passwordLoginNormalizado;

    console.log(usuarioObjeto);

    //Se a validação NÃO passar, se for false o retorno da função....
  } else {
    evento.preventDefault();
    alert("Ambas as informações devem ser preenchidas");
  }
});

//Ao clicar e interagir com o campo de "email" no formulário
emailLogin.addEventListener('blur', function() {
  //Capturando o elemento <Small> do html
  let emailValidacao = document.getElementById('emailValidacao');
  if (emailLogin.value != " ") {
    //Email tem alguma informação
    emailValidacao.innerText = " ";
    emailEValido = true;
  } else {
    //Email está vazio
    emailValidacao.innerText = "Campo obrigatório";
    emailValidacao.style.color = "#E01E1E";
    emailValidacao.style.fontSize = "10"
    emailValidacao.style.fontWeight = "italic"
    emailLogin.style.border = `2px solid #E01E1E`
    emailEValido = false;
  }
  
  /* Incluir metodo regex verificar caracteres do email se são validos. Email tem caracteres especificos e preenchidos corretamente*/
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailLogin.value)) {
    emailValidacao.innerText = " ";
    emailLogin.style.backgroundColor = "blue";
    emailEValido = true;
  } else {
    /*Email esta com preenchimento incorreto conforme padrão Regex*/
    emailValidacao.innerText = "O Email não é Válido";
    emailValidacao.style.color = "#E05E";
    emailValidacao.style.fontSize = "10";
    emailValidacao.style.fontWeight = "italic";
    emailLogin.style.border = `2 px solid #D01F8E`;
    emailEValido = false;
  }
  validaTelaDeLogin();
});


/*implementando metodo blur -Validação da Senha
passwordLogin.addEventListener('blur', function() {
  let passwordValidacao = document.getElementById('passwordValidacao');
  //Incluimos o elemento  <Small> do html e capturamos o mesmo
  if (passwordLogin.value != " ") {
    //Senha é diferente de vazio
    passwordValidacao.innerText = " ";
    passwordEValido = true;
  } else {
    //senha está vazio
    passwordValidacao.innerText = "Senha obrigatória"
    passwordLogin.style.backgroundColor = "blue";
    passwordValidacao.style.color = "#E05E"
    passwordValidacao.style.fontSize = "12"
    passwordValidacao.style.fontWeight = "italic"
    passwordLogin.style.border = `2 px solid #D01F8E`
    passwordEValido = false;
  }
  /*Incluir método regex para validação de senha: -
  pelo menos 8 caracteres -
  deve conter pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número -
  Pode conter caracteres especiais
  if (/^?=.\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwordLogin.value)) {
    passwordValidacao.innerText = " ";
    passwordEValido = true;
  } else {
    /*Senha esta com preenchimento incorreto conforme padrão Regex*/
    /*passwordValidacao.style.fontWeight = "italic";
    passwordValidacao.style.color = "#E05E";
    passwordValidacao.style.fontSize = "10";
    passwordValidacao.innerText = ("A senha não é Válido,favor digitar : pelo menos 8 caracteres, deve conter pelo menos 1 letra maiúscula,1 letra minúscula e 1 número, Pode conter caracteres especiais ");
    campoPasswordLogin.style.border = `2 px solid #D01F8E `;
    passwordEValido = false;
}
validaTelaDeLogin();
);*/

function validaTelaDeLogin() {
  if (emailEValido) {
    botaoSalvar.removeAttribute('disabled')
    botaoSalvar.innerText = "Acessar"
    return true
  } else {
    botaoSalvar.setAttribute('disabled', true);
    botaoSalvar.innerText = "Bloqueado";
    return false;
  }
  if (passwordEValido) {
    botaoSalvar.removeAttribute('disabled');
    botaoSalvar.innerText = "Acessar";
    return true
  } else {
    botaoSalvar.setAttribute('disabled', true);
    botaoSalvar.innerText = "Bloqueado";
    return false;
  }
}