let metas = JSON.parse(localStorage.getItem("metas")) || [
    { nome: "Entrar 15 dias seguidos", atual: 0, total: 15 }
];

function salvarMetas() {
    localStorage.setItem("metas", JSON.stringify(metas));
}

function renderMetas() {
    const lista = document.getElementById("listaMetas");
    lista.innerHTML = "";

    metas.forEach((meta, index) => {
        const porcentagem = Math.min((meta.atual / meta.total) * 100, 100).toFixed(1);

        const div = document.createElement("div");
        div.className = "meta";
        div.innerHTML = `
            <strong>${meta.nome}</strong>
            <div class="progress-container">
                <div class="progress-bar" style="width:${porcentagem}%">${porcentagem}%</div>
            </div>
            <p>${meta.atual} / ${meta.total}</p>
            <input type="number" id="incremento-${index}" placeholder="Adicionar valor" min="1">
            <button onclick="incrementarMeta(${index})">Atualizar</button>
            <button onclick="removerMeta(${index})" style="background:red;color:white;">Remover</button>
        `;

        lista.appendChild(div);
    });
}

function incrementarMeta(index) {
    const input = document.getElementById(`incremento-${index}`);
    let valor = parseFloat(input.value);
    if (!isNaN(valor) && valor > 0) {
        metas[index].atual += valor;
        if (metas[index].atual > metas[index].total) {
            metas[index].atual = metas[index].total;
        }
        input.value = "";
        salvarMetas();
        renderMetas();
    }
}

function adicionarMeta() {
    const nome = document.getElementById("nomeMeta").value;
    const valor = parseFloat(document.getElementById("valorMeta").value);

    if (nome.trim() && !isNaN(valor) && valor > 0) {
        metas.push({ nome: nome.trim(), atual: 0, total: valor });
        document.getElementById("nomeMeta").value = "";
        document.getElementById("valorMeta").value = "";
        salvarMetas();
        renderMetas();
    }
}

function removerMeta(index) {
    metas.splice(index, 1);
    salvarMetas();
    renderMetas();
}

renderMetas();