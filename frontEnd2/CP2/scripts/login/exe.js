//Capturando o elemento <Small> do html
let emailValidacao = document.getElementById('emailValidacao');
let passwordValidacao = document.getElementById('passwordValidacao');

if (campoEmailLogin.value != "") {
    //Email tem informação
    emailValidacao.innerText = ""
    campoEmailLogin.style.border = "blue";
    emailEValido = true;
} else {
    //Email está vazio
    emailValidacao.innerText = "Campo obrigatório"
    emailValidacao.style.color = "#E01E1E";
    emailValidacao.style.fontSize = "8";
    emailValidacao.style.fontWeight = "bold";
    campoEmailLogin.style.border = "1px solid #E01E1E";
    emailEValido = false;
}
if (campoPasswordLogin.value != "") {
    //Senha tem informação
    passwordValidacao.innerText = " ";
    campoPasswordLogin.style.border = "2 px solid# E01E1E ";
    passwordEValido = true;
} else {
    //senha está vazio
    passwordValidacao.innerText = "Campo obrigatório"
    passwordValidacao.style.color = "#B01E1B";
    passwordValidacao.style.fontSize = "8";
    passwordValidacao.style.fontWeight = "bold";
    campoPasswordLogin.style.border = "1 px solid #F01E1D ";
    campoPasswordLogin.style.backgroundColor = 'black';
    passwordEValido = false;
}
validaTelaDeLogin();