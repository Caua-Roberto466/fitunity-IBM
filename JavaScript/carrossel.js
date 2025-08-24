document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.carrossel-opinioes');
    const items = document.querySelectorAll('.carrossel-item');
    const indicadores = document.querySelectorAll('.indicador');
    const prevBtn = document.querySelector('.carrossel-prev');
    const nextBtn = document.querySelector('.carrossel-next');
    
    let currentIndex = 0;
    let intervalId;

    // Função para mostrar um item específico
    function showItem(index) {
        // Remove a classe active de todos os items
        items.forEach(item => item.classList.remove('active'));
        indicadores.forEach(ind => ind.classList.remove('active'));
        
        // Adiciona a classe active ao item atual
        items[index].classList.add('active');
        indicadores[index].classList.add('active');
        
        currentIndex = index;
    }

    // Função para avançar para o próximo item
    function nextItem() {
        let nextIndex = (currentIndex + 1) % items.length;
        showItem(nextIndex);
    }

    // Função para voltar ao item anterior
    function prevItem() {
        let prevIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(prevIndex);
    }

    // Inicia o carrossel automático
    function startCarousel() {
        intervalId = setInterval(nextItem, 15000); // 5 segundos (altere para 15000 se quiser 15s)
    }

    // Para o carrossel automático
    function stopCarousel() {
        clearInterval(intervalId);
    }

    // Eventos dos botões
    nextBtn.addEventListener('click', () => {
        stopCarousel();
        nextItem();
        startCarousel();
    });

    prevBtn.addEventListener('click', () => {
        stopCarousel();
        prevItem();
        startCarousel();
    });

    // Eventos dos indicadores
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', () => {
            stopCarousel();
            showItem(index);
            startCarousel();
        });
    });

    // Pausa o carrossel quando o mouse está sobre ele
    carrossel.addEventListener('mouseenter', stopCarousel);
    carrossel.addEventListener('mouseleave', startCarousel);

    // Também pausa quando o mouse está sobre os botões ou indicadores
    prevBtn.addEventListener('mouseenter', stopCarousel);
    nextBtn.addEventListener('mouseenter', stopCarousel);
    document.querySelector('.carrossel-indicadores').addEventListener('mouseenter', stopCarousel);

    prevBtn.addEventListener('mouseleave', startCarousel);
    nextBtn.addEventListener('mouseleave', startCarousel);
    document.querySelector('.carrossel-indicadores').addEventListener('mouseleave', startCarousel);

    // Inicia o carrossel
    showItem(0);
    startCarousel();
});
