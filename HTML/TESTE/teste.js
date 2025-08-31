var div_geral = document.getElementById("div-principal")
var div_escondida = document.getElementById("div-escondida")
var lerMais = document.getElementById("ler-mais")
var lerMenos = document.getElementById("ler-menos")

div_escondida.style.display = "none"

function ler(){
    div_escondida.style.display = "block"
    lerMais.style.display = "none"
}

function esconder(){
    div_escondida.style.display = "none"
    lerMais.style.display = "block"
}