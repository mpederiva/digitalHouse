let numero=parseInt(prompt("Escolha um felino para modificar. 1 - tigre, 2 - leão, 3 - leopardo, 4 - pantera negra, 5 - jaguar, 6 - guepardo"));


let listaImagensFelinos = document.querySelectorAll('img');
let animal = document.querySelectorAll('h2')

alert("Você escolheu: " + animal[(numero-1)].innerText);
let link=prompt("Insira uma URL para atualização de imagem");

listaImagensFelinos[(numero-1)].setAttribute("src", link)

// Heloisa Meister, Marta Pederiva, Michaelle Lima, Narayana Brahmayoti, Erick Niciolli


/* 
    Passo a passo para resolver o desafio:
    1- Criar uma opção para a seleção do felino (promp)
    2 - Verificar, qual foi o felino escolhido
    3 - Usuário informa uma url/img da internet (prompt)
    4 - Acessar o atributo 'src' e alterar para a img da internet
*/