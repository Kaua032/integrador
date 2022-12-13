function mais() {
  let botaomenos = document.querySelector("#botao-menos");
  let botaomais = document.querySelector("#botao-mais");
  botaomais.innerHTML =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel deserunt saepe quibusdam laboriosam minus non maxime explicabo dicta a, repellendus, temporibus aperiam consequuntur veritatis ipsum pariatur ipsa. Voluptatum, quo deserunt";
  botaomais.style.width = "100%";
  botaomais.style.cursor = "default";
  botaomenos.style.display = "flex";
}
function menos() {
  let botaomenos = document.querySelector("#botao-menos");
  let botaomais = document.querySelector("#botao-mais");
  botaomais.innerHTML = "mais...";
  botaomais.style.width = "74px";
  botaomais.style.cursor = "pointer";
  botaomenos.style.display = "none";
}
function abrircategoria() {
  let categorias = document.querySelector("#modal1");
  categorias.style.display = "flex";
}
function sair1() {
  let sair1 = document.querySelector("#modal1");
  sair1.style.display = "none";
}
function abrirhistorico() {
  let historico = document.querySelector("#modal2");
  historico.style.display = "flex";
}
function sair2() {
  let sair2 = document.querySelector("#modal2");
  sair2.style.display = "none";
}
function abrirabaperfil() {
  let perfil = document.querySelector("#modal3");
  perfil.style.display = "flex";
}
function sair3() {
  let sair3 = document.querySelector("#modal3");
  sair3.style.display = "none";
}
