document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("pagar").addEventListener("click", pagar);
});

function pagar() {
    var nomeP = document.getElementById("nome-pag").value.trim();
    var cartaoP = document.getElementById('cartao-pag').value.trim();
    var validadeP = document.getElementById('validade-pag').value.trim();
    var cvvP = document.getElementById('cvv-pag').value.trim();
    var erroP = document.getElementById("erro-pag");

    erroP.innerText = "";

    if (
        nomeP.length < 3 ||
        cartaoP.length !== 19 ||
        validadeP.length !== 5 ||
        cvvP.length !== 3
    ) {
        erroP.innerText = "⚠️ Preencha todos os campos corretamente.";
        return false;
    }

    localStorage.setItem('nomeP', nomeP);

    localStorage.setItem('cartao', nomeP);

    alert("Compra realizada com sucesso");
    window.location.href = "perfil.html";
}
