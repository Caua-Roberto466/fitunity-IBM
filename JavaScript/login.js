document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão

    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const erroEmail = document.getElementById('erro-email');
    const erroSenha = document.getElementById('erro-senha');

    const email = emailInput.value.trim().toLowerCase();
    const senha = senhaInput.value;

    // Recuperar cadastros salvos
    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

    // Procurar usuário pelo email
    const usuario = cadastros.find(user => user.email.toLowerCase() === email);

    if (!usuario) {
        // E-mail não encontrado
        erroEmail.textContent = "E-mail não cadastrado.";
        erroEmail.style.display = "block";
        erroSenha.style.display = "none";
        return;
    } else {
        erroEmail.style.display = "none";
    }

    // Validar senha
    if (usuario.senha !== senha) {
        erroSenha.textContent = "Senha incorreta.";
        erroSenha.style.display = "block";
        return;
    } else {
        erroSenha.style.display = "none";
    }

    // Se passou em todas as verificações
    alert("Login realizado com sucesso!");
    // Redirecionar para a página principal
    window.location.href = "perfil.html";
});
