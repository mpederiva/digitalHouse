// Mostre um alerta na página quando a tela terminar de ser carregada.

onload = alert('A página ja foi carregada');


// Previna a página de ser recarregada quando houver o submit utilizando preventDefault().

let botaoSubmit = document.getElementById('botaoSubmit');

botaoSubmit.addEventListener('click', (evento) => evento.preventDefault());


// Faça um trecho de código que utilize algum evento de teclado, esse evento irá escrever o conteúdo do input em uma tag <p> e logo abaixo o número de vezes que esse evento foi chamado. Exemplo: <p>futebol</p> <p>7</p> . 

    // função criada para que toda vez q o usuário pressionar uma telca no input, acrescentará +1 a variável valor.

let nome = document.querySelector('#nome');
let valor = 0

nome.onkeypress = (e) => {
    if (e.key !== "Enter"){ //qualquer tecla diferente de Enter que adicionará o +1 a variavel valor 
        valor ++
    }
}

let botaoLimpar = document.querySelector('#botaoLimpar');
let p = document.createElement('p');

botaoLimpar.onclick = () => valor = 0 // quando clicar no botão Limpar a variável valor será zerada


    // criação de uma nova tag para retornar ao usuário

    let form = document.querySelector('form');
    
    function nomeAtualizado(){
        
    p.innerText = ` Olá ${nome.value}! \n você pressionou ${valor} teclas para preencher seu nome `
    form.appendChild(p); 
    
    valor = 0
}

    //ao apertar o botão enviar irá executar a função nomeAtualizado, gerando o retorno

botaoSubmit.addEventListener('click', (evento) => nomeAtualizado());


// Adicione uma cor a um texto quando o mouse ficar acima do mesmo e outra cor quando ele sair do mesmo.

let texto = document.querySelector('label');


texto.onmouseover = () => texto.style.color = 'red'
texto.onmouseout = () => texto.style.color = 'black' ;