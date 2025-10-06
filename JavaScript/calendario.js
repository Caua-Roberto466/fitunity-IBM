function ativar(elemento){
    if(elemento.classList.contains('ativo')){
        elemento.classList.remove('ativo')
    }else{
        elemento.classList.add('ativo')
    }
}