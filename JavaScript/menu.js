function mostrar(){
    let menuMobile = document.querySelector(".mobile-menu")
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icone').src = "../Imagens/menu_white_36dp.svg"
    }else{
        menuMobile.classList.add('open')
        document.querySelector('.icone').src = "../Imagens/close_white_36dp.svg"
        menuMobile.style.transition = "0.3s"
    }
}