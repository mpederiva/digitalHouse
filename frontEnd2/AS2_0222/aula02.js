let usuario = parseInt(prompt("Escolha um número dentre os seguintes:", "1 = Pedra, 2 = Papel, 3 = Tesoura"));

console.log(usuario);

let computador = parseInt(Math.random()*3+1);

let pontosUsuario = 0;

let pontosComputador = 0;

switch (usuario) {
    case 1: //Pedra
         switch (computador) {
            case 1: //Pedra
               alert("Os dois escolheram Pedra. Tivemos um empate!");
               break;
            case 2: //Papel
               alert("Papel embrulha Pedra. O Computador venceu!");
               pontosComputador++;
               break;
            case 3: //Tesoura
               alert("Pedra quebra Tesoura. Você venceu!");
               pontosUsuario++;
               break;
         }
         break;

    case 2: //Papel
         switch (computador) {
            case 1: //Pedra
               alert("Papel embrulha Pedra. Você venceu!");
               pontosUsuario++;
               break;
            case 2: //Papel
               alert("Os dois escolheram Papel. Tivemos um empate!");
               break;
            case 3: //Tesoura
               alert("Tesoura corta o papel. O Computador venceu!");
               pontosComputador++;
               break;
         }
         break;

    case 3: //Tesoura
         switch (computador) {
            case 1: //Pedra
               alert("Pedra quebra Tesoura. O Computador venceu!");
               pontosComputador++;
               break;
            case 2: //Papel
               alert("Tesoura corta papel. Você venceu!");
               pontosUsuario++;
               break;
            case 3: //Tesoura
               alert("Os dois escolheram Tesoura. Tivemos um empate!");
               break;
         }
         break;
}

if (pontosComputador > pontosUsuario) {
   alert("Seus pontos: " +pontosUsuario);
   alert("Pontos do Computador: " +pontosComputador);
   alert("O computador venceu");
} else if (pontosUsuario  > pontosComputador) {
   alert("Seus pontos: " +pontosUsuario);
   alert("Pontos do Computador: " +pontosComputador);
   alert("Você venceu!");
} else if (pontosComputador == pontosUsuario) {
   alert("Seus pontos: " +pontosUsuario);
   alert("Pontos do Computador: " +pontosComputador);
   alert("Empatou, tente outra vez!");
}