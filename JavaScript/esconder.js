/*Seção do treino fullbody em casa*/ 
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

/*Seção do treino fullbody na academia*/
var div_escondida2 = document.getElementById("div-escondida2")
var lerMais2 = document.getElementById("ler-mais2")
var lerMenos2 = document.getElementById("ler-menos2")

div_escondida2.style.display = "none"

function ler2(){
    div_escondida2.style.display = "block"
    lerMais2.style.display = "none"
}

function esconder2(){
    div_escondida2.style.display = "none"
    lerMais2.style.display = "block"
}