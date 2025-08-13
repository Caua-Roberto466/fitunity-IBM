document.querySelector('form').addEventListener('submit', function(event) { //Pega o elemento 'form' da página html, espera o botão enviar ser apertado, e começa um evento quando for apertado
    event.preventDefault(); // Impede o envio tradicional

    const emailInput = document.getElementById('email'); //Pega o campo do emai e transforma em uma váriavel
    const erroEmail = document.getElementById('erro-email'); //Pega a menssagem de erro e transforma numa váriavel
    const email = emailInput.value.trim().toLowerCase(); //Pega o valor digitado no campo de email, tensforma em uma váriavel e deixa em minúsculo para poder comparar

    // Recuperar os cadastros salvos
    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || []; //Pega os cadastro salvos (se tiver), transforma em uma váriavel array, e se não tiver nenhum cadastro salvo, deixa um array vazio

    // Verificar se o e-mail já existe
    const emailJaExiste = cadastros.some(user => user.email.toLowerCase() === email); //Vai ver se  o email já está salvo, e retorna true se tiver

    if (emailJaExiste) { //Vai iniciar a condição se o resultado der true
        // Mostrar mensagem de erro
        erroEmail.textContent = "Este e-mail já está cadastrado."; //Vai exibir a menssagem na div
        erroEmail.style.display = "block"; //Deixa o display em blocos
        return; // Impede o cadastro
    } else { //Se der falso deixa oculta a menssagem de erro
        // Esconde a mensagem de erro, caso já tenha aparecido antes
        erroEmail.style.display = "none"; //Esconde a menssagem
    }

    // Pega a data de nascimento
    const dataNascimento = document.getElementById('nasci').value;
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    // Calcula a idade
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
    const mesNascimento = nascimento.getMonth();
    const diaNascimento = nascimento.getDate();
    

    // Ajusta se ainda não fez aniversário este ano
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }


    // Coletar os demais dados
    const dados = { //É onde vai guarda os dados pegos no formulário
        nome: document.getElementById('nome').value,
        email: email,
        senha: document.getElementById('senha').value,
        genero: document.querySelector('input[name="genero"]:checked')?.value || '',
        estado: document.getElementById('estado').value,
        pesocad: document.getElementById('peso-cad').value,
        alturac: document.getElementById('alturac').value,
        idade: idade
    };

    // Adiciona o peso à lista de cadastros
    cadastros.push(dados); //Adiciona os dados na lista de cadastro
    localStorage.setItem('cadastros', JSON.stringify(cadastros));//transforma isso em String

    // Armazena o peso do usuário separadamente
    localStorage.setItem('peso_user', dados.pesocad);

    localStorage.setItem('altura_user', dados.alturac);

    localStorage.setItem('idade_user', dados.idade);

    localStorage.setItem('nome_user', dados.nome);

    alert('Cadastro salvo com sucesso!'); //Exibe o alerta de que foi salvo
    document.querySelector('form').reset(); //Limpa todo o formulário
    window.location.href = 'entrar.html';

});