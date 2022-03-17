function darkMode() {
  let darkBody = document.querySelector('body');
  darkBody.classList.toggle('darkBody');

  let darkTitulo = document.querySelector('h1');
  darkTitulo.classList.toggle('darkTitulo');
  
  let darkConteudo = document.querySelector('h3');
  darkConteudo.classList.toggle('darkConteudo');

  let darkItem = document.querySelectorAll('.item');

  darkItem.forEach (element => {element.classList.toggle('darkItem')}); 
 }
var btSwitch = document.getElementById("btSwitch");
btSwitch.addEventListener("click", darkMode);