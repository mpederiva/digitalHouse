/*Passo 1*/
//Você precisará remover os posts de cada felino do HTML e armazená-los em uma variável Javascript. Tenha o cuidado de armazenar os dados de uma forma que seja facilmente acessível.
let felinos = document.querySelectorAll(".item");
felinos.forEach(felino => { 
    felino.style.display = "none";
});

/*Passo 2*/
//Como nosso HTML já tinha estilos aplicados a ele, devemos conseguir replicar essa estrutura com alguma ferramenta JavaScript
//(Obs.: você pode olhar os conceitos literais de modelo novamente 😉). Para esta etapa, você precisará fazer uma função que receba os dados necessários de um post e os insira no código HTML correspondente.
function criarPost (url, titulo, desc){
    let html = '<div class="item"><img src="' + url + '"><h2>' + titulo + '</h2><p>' + desc + '</p></div>';
    let div = document.createElement("div");
    div.className = "item";

    let img = document.createElement("img");
    img.setAttribute("src", url);
    div.appendChild(img);

    let h2 = document.createElement("h2");
    h2.innerText = titulo;
    div.appendChild(h2);

    let p = document.createElement("p");
    p.innerText = desc;
    div.appendChild(p);

    let container = document.querySelectorAll(".container");

    container[1].appendChild(div);
}

/*Passo 3*/
//Assim que tivermos nossa função que passa nossos dados de postagem para o código HTML, conseguiremos escrever esse código em nosso documento.
//criar varios items
criarPost("https://picsum.photos/430/430?grayscale", "Lorem picsum 1", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sequi nemo unde? Recusandae, sequi repellendus quisquam officiis itaque amet");
criarPost("https://picsum.photos/430/430?blur", "Lorem picsum 2", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sequi nemo unde? Recusandae, sequi repellendus quisquam officiis itaque amet");
criarPost("https://picsum.photos/430/430?blur=2", "Lorem picsum 3", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sequi nemo unde? Recusandae, sequi repellendus quisquam officiis itaque amet");
criarPost("https://picsum.photos/430/430?grayscale&blur=2", "Lorem picsum 4", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sequi nemo unde? Recusandae, sequi repellendus quisquam officiis itaque amet");
criarPost("https://picsum.photos/430/430?random=1", "Lorem picsum 5", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sequi nemo unde? Recusandae, sequi repellendus quisquam officiis itaque amet");
criarPost("https://picsum.photos/430/430?random=2", "Lorem picsum 6", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sequi nemo unde? Recusandae, sequi repellendus quisquam officiis itaque amet");
