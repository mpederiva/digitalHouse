//Capturando os elementos, através dos seletores do DOM
let toggleswitch = document.getElementById('toggleSwitch');
let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let itemsList = document.querySelectorAll('.item');
let header = document.querySelector('header');

/* Função que é chamada pelo onChanged ao clicar no ToggleSwitch */
function alteraTema() {
    let itemsListAtualizada = document.querySelectorAll('.item');

    // Verifica qual o valor que é retornado pelo Switch
    //console.log(switchValue.checked);

    if (toggleswitch.checked) { //Caso seja verdadeiro, ou seja, está selecionado

        /* Adicionando as classes (dark-mode) css nos elementos capturados */
        body.classList.add('body-dark');
        h1.classList.add('h1-dark');
        header.classList.add('header-dark');

        //Percorrendo com o ForEach (Recomendado)
        itemsListAtualizada.forEach(item => {
            item.classList.add('items-dark');
            item.classList.add('items-text-dark');
    
        });

    } else { //Caso seja false, ou seja, não está selecionado
        /* Remove as classes adicionadas anteiormente, assim, a página volta para o "modo-claro" */
        body.classList.remove('body-dark');
        h1.classList.remove('h1-dark');
        header.classList.remove('header-dark');

        //Percorre a lista de elementos, para fazer a remoção em cada um dos itens
        itemsListAtualizada.forEach(item => {
            item.classList.remove('items-dark');
            //Uma forma de alterar o texto (poem o elemento principal)
            item.classList.remove('items-text-dark');
        });
    }
}