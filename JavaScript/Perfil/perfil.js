window.onload = function() {
    const pesoUser = localStorage.getItem('peso_user');
    const pesoElement = document.getElementById('peso-user');
    const alturaUser = localStorage.getItem('altura_user');
    const alturaElement = document.getElementById('altura-user');
    const idadeUser = localStorage.getItem('idade_user');
    const idadeElement = document.getElementById('idade-user')
    const nomeI = localStorage.getItem('nome_user');
    const nomeH = document.getElementById('nome-user');

    const imc = pesoUser/(alturaUser*alturaUser)
    const imcH = document.getElementById('imc-user')

    if (pesoUser) {
    pesoElement.textContent = `${pesoUser} Kg`;
    pesoElement.classList.add('info-user-text');
}

if (alturaUser) {
    alturaElement.textContent = `${alturaUser} Cm`;
    alturaElement.classList.add('info-user-text');
}

if (idadeUser) {
    idadeElement.textContent = `${idadeUser} Anos`;
    idadeElement.classList.add('info-user-text');
}

if (imc) {
    imcH.textContent = `${imc.toFixed(2)} IMC`;
    imcH.classList.add('info-user-text');
}

if (nomeI) {
    nomeH.textContent = nomeI;
    nomeH.classList.add('info-user-text');
}

};