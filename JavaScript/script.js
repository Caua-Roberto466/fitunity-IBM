const button = document.getElementById('toggle-dark');  //Cria a váriavel button para receber o botão do modo noturno
button.addEventListener('click', () => { //Vai criar uma lista de eventos quando o botão do modo noturno for clicado
    document.body.classList.toggle('darkmode'); //vai criar uma classe 'darkmode', que vai ser chamada assim que o botão for clicado
    
    // Opcional: trocar texto do botão
    if (document.body.classList.contains('darkmode')) { //Se quando clicar, o botão já estiver marcado como modo noturno, ele vai mudar para modo claro
        button.textContent = 'Modo Claro'; //Isso que vai mudar o nome para modo claro
    } else { //Senão estiver registrado, deixa o texto como modo noturno
        button.textContent = 'Modo Noturno'; //Vai deixar o nome modo noturno
    }
});

const buttonmob = document.getElementById('toggle-dark-mobile');  //Cria a váriavel button para receber o botão do modo noturno
buttonmob.addEventListener('click', () => { //Vai criar uma lista de eventos quando o botão do modo noturno for clicado
    document.body.classList.toggle('darkmode'); //vai criar uma classe 'darkmode', que vai ser chamada assim que o botão for clicado
    
    // Opcional: trocar texto do botão
    if (document.body.classList.contains('darkmode')) { //Se quando clicar, o botão já estiver marcado como modo noturno, ele vai mudar para modo claro
        button.textContent = 'Modo Claro'; //Isso que vai mudar o nome para modo claro
    } else { //Senão estiver registrado, deixa o texto como modo noturno
        button.textContent = 'Modo Noturno'; //Vai deixar o nome modo noturno
    }
});