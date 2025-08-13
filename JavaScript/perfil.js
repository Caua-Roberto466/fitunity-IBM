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
        
        // Estilizando o elemento
        pesoElement.style.color = 'black'; // Cor do texto
        pesoElement.style.textAlign = 'center'; // Centralizando o texto
        pesoElement.style.fontSize = '20px'; // Tamanho da fonte (opcional)
        pesoElement.style.fontWeight = 'bold'; // Negrito (opcional)
    }

    if (alturaUser) {
        alturaElement.textContent = `${alturaUser} Cm`;
        
        // Estilizando o elemento
        alturaElement.style.color = 'black'; // Cor do texto
        alturaElement.style.textAlign = 'center'; // Centralizando o texto
        alturaElement.style.fontSize = '20px'; // Tamanho da fonte (opcional)
        alturaElement.style.fontWeight = 'bold'; // Negrito (opcional)
    }

    if (idadeUser) {
        idadeElement.textContent = `${idadeUser} Anos`;
        
        // Estilizando o elemento
        idadeElement.style.color = 'black'; // Cor do texto
        idadeElement.style.textAlign = 'center'; // Centralizando o texto
        idadeElement.style.fontSize = '20px'; // Tamanho da fonte (opcional)
        idadeElement.style.fontWeight = 'bold'; // Negrito (opcional)
    }

    if (imc) {
        imcH.textContent = `${imc.toFixed(2)} IMC`;
        
        // Estilizando o elemento
        imcH.style.color = 'black'; // Cor do texto
        imcH.style.textAlign = 'center'; // Centralizando o texto
        imcH.style.fontSize = '20px'; // Tamanho da fonte (opcional)
        imcH.style.fontWeight = 'bold'; // Negrito (opcional)
    }

    if (nomeI) {
        nomeH.textContent = `${nomeI}`;
        
        // Estilizando o elemento
        nomeH.style.color = 'black'; // Cor do texto
        nomeH.style.textAlign = 'center'; // Centralizando o texto
        nomeH.style.fontSize = '20px'; // Tamanho da fonte (opcional)
        nomeH.style.fontWeight = 'bold'; // Negrito (opcional)
    }
};