//Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 
    // 1 - Pipoca – 10 segundos (padrão);
    // 2 - Macarrão – 8 segundos (padrão);
    // 3 - Carne – 15 segundos (padrão);
    // 4 - Feijão – 12 segundos (padrão);
    // 5 - Brigadeiro – 8 segundos (padrão); 

//O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
//Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
//Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
//Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
//Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
//No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

//menu -> escolhe as opções
function menu(prato) {
    switch(prato) {
        case '1':
            console.log("Pipoca");
            break;
        case '2':
            console.log("Macarrão");
            break;
        case '3':
            console.log("Carne");
            break;
        case '4':
            console.log("Feijão");
            break;
        case '5':
            console.log("Brigadeiro");
            break;
        default:
            console.log("Prato inexistente");
            break;
    }
}

//tempo -> escolhe a duração
let comida = {
    "Pipoca": 10,
    "Macarrão": 8, 
    "Carne": 15,
    "Feijão": 12,
    "Brigadeiro": 8,
    "tempoUsuario": function (prato, segundos){
        if (this[prato] == undefined) {
            console.log("Prato inexistente");
        } else {
            if(segundos >2 * this[prato] && segundos  <= 3 * this[prato]){
            console.log("a comida queimou");
            } else if(this[prato] > segundos){
            console.log("tempo insuficiente");
            } else if(segundos  >  3 * this[prato]){
            console.log("kabumm");
            } else {
            console.log("Prato pronto, bom apetite!!!");
            }
        }
    }
}

menu('1');
comida.tempoUsuario("Pipoca", 5);
menu('1');
comida.tempoUsuario("Pipoca", 15);
menu('1');
comida.tempoUsuario("Pipoca", 25);
menu('1');
comida.tempoUsuario("Pipoca", 45);
menu('7');
comida.tempoUsuario("Chá", 45);