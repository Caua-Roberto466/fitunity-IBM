// Seleciona os botões
const button = document.getElementById('toggle-dark');
const buttonmob = document.getElementById('toggle-dark-mobile');

// Função para alternar tema e salvar no localStorage
function toggleDarkMode() {
    document.body.classList.toggle('darkmode');

    if (document.body.classList.contains('darkmode')) {
        localStorage.setItem('theme', 'dark'); // salva tema
        if (button) button.textContent = 'Modo Claro';
        if (buttonmob) buttonmob.textContent = 'Modo Claro';
    } else {
        localStorage.setItem('theme', 'light'); // salva tema
        if (button) button.textContent = 'Modo Noturno';
        if (buttonmob) buttonmob.textContent = 'Modo Noturno';
    }
}

// Ao clicar nos botões → alterna o tema
if (button) button.addEventListener('click', toggleDarkMode);
if (buttonmob) buttonmob.addEventListener('click', toggleDarkMode);

// Ao carregar a página → aplica o tema salvo
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('darkmode');
        if (button) button.textContent = 'Modo Claro';
        if (buttonmob) buttonmob.textContent = 'Modo Claro';
    } else {
        document.body.classList.remove('darkmode');
        if (button) button.textContent = 'Modo Noturno';
        if (buttonmob) buttonmob.textContent = 'Modo Noturno';
    }
});
