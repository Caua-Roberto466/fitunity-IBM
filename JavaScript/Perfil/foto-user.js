// Seleciona elementos
const fotoUser = document.querySelector(".foto-user");
const editarFoto = document.getElementById("editar");

// Ao carregar a página, verifica se existe foto salva
window.addEventListener("load", () => {
    const fotoSalva = localStorage.getItem("fotoUser");
    if(fotoSalva){
        fotoUser.src = fotoSalva;
    }
});

// Clique em "Editar foto de perfil"
editarFoto.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();

    input.onchange = () => {
        const file = input.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = function(e){
                const dataURL = e.target.result;
                fotoUser.src = dataURL;
                localStorage.setItem("fotoUser", dataURL);
            }
            reader.readAsDataURL(file);
        }
    }
});
