// ===============================
// METAS PADRÃO
// ===============================
let metasSalvas = JSON.parse(localStorage.getItem("metas"));

if (!metasSalvas || metasSalvas.length === 0) {
    metasSalvas = [
        { nome: "Entrar 30 dias seguidos", atual: 0, total: 30 },
        { nome: "Realizar 15 treinos", atual: 0, total: 15 }
    ];
}

let metas = metasSalvas;

// ===============================
// SISTEMA DE XP E NÍVEL
// ===============================
let progresso = JSON.parse(localStorage.getItem("progresso"));
if (!progresso) {
    progresso = { xp: 0, nivel: 1 };
    localStorage.setItem("progresso", JSON.stringify(progresso));
}

function ganharXP(qtd) {
    progresso.xp += qtd;

    const xpNecessario = progresso.nivel * 100;
    while (progresso.xp >= xpNecessario) {
        progresso.xp -= xpNecessario;
        progresso.nivel++;
        alert(`🎉 Parabéns! Você chegou ao nível ${progresso.nivel}!`);
    }

    localStorage.setItem("progresso", JSON.stringify(progresso));
    atualizarHUDXP();
}

function atualizarHUDXP() {
    const xpNecessario = progresso.nivel * 100;
    const porcentagem = Math.min((progresso.xp / xpNecessario) * 100, 100).toFixed(1);

    const hud = document.getElementById("xpHud");
    if (hud) {
        hud.innerHTML = `
            <div style="text-align:center; font-weight:bold; font-size:18px;">
                Nível ${progresso.nivel}
            </div>
            <div class="progressxp-container" style="height:20px; background:#ddd; border-radius:10px; overflow:hidden; margin-top:5px;">
                <div class="progressxp-bar" style="height:100%; width:${porcentagem}%; background:linear-gradient(to right, #009df8, #1da3b8); color:black; text-align:center; font-size:14px;">
                    ${progresso.xp} / ${xpNecessario} XP
                </div>
            </div>
        `;
    }
}

// ===============================
// FUNÇÕES DE METAS
// ===============================
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
            <button onclick="incrementarMeta(${index})" class="button">Atualizar</button>
            <button onclick="removerMeta(${index})" class="button" style="background:red;color:white;">Remover</button>
        `;

        lista.appendChild(div);
    });
}

// Lista de metas padrão para dar XP
const metasPadrao = [
    "Entrar 30 dias seguidos",
    "Realizar 15 treinos"
];

function incrementarMeta(index) {
    const input = document.getElementById(`incremento-${index}`);
    let valor = parseFloat(input.value);
    if (!isNaN(valor) && valor > 0) {
        metas[index].atual += valor;
        if (metas[index].atual > metas[index].total) {
            metas[index].atual = metas[index].total;
        }

        // Se meta padrão for concluída agora → ganhar XP
        if (metas[index].atual === metas[index].total && metasPadrao.includes(metas[index].nome)) {
            ganharXP(50);
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

// ===============================
// INICIALIZA
// ===============================
renderMetas();
atualizarHUDXP();
