/*Teste de outro js com base na aula 13 do PG para ver se a validação funciona */

function selectId(){
    return document.getElementById(id);
}

function empty(input){
    return input.value.trim() === "";
}

function errorMessage(message){
    errorListUl.innerHTML += "<li>" + message + "</li>";
}

let form = selectId('form-header');
let nome = selectId('inputName');

let errorListUl = document.querySelector('#error-list ul');
let errorList = selectId('erros-list')

form.addEventListener("submit", function(ev){
    errorListUl.innerHTML ='';
    if (empty(inputName)){
        errorMessage("Campo <b>nome</b> não preenchido");
    }
    if (empty(inputEmail)){
        errorMessage("Campo <b>e-mail</b> não preenchido");
    }
    if (empty(inputPassword)){
        errorMessage("Campo <b>senha</b> não preenchido");
    }

    if (errorListUl.querySelectorAll('li').length > 0){
        ev.preventDefault();
        errorList.hidden = '';
    }
});