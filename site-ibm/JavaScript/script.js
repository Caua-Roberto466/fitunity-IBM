
const button = document.getElementById('toggle-dark');
button.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
    
    // Opcional: trocar texto do botão
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = 'Modo Claro';
    } else {
        button.textContent = 'Modo Noturno';
    }
});

