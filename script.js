// Função para alterar o status da mesa
function alterarStatus(mesaId) {
    const mesa = document.getElementById(`mesa-${mesaId}`);
    const botao = mesa.querySelector('button');
    const mensagem = document.getElementById('mensagem');
    const alertaSom = document.getElementById('alerta-som'); // Referência ao som

    // Quando a mesa estiver "Livre" (clique em "Livre")
    if (botao.textContent === "Livre") {
        // Alterar para "Ocupado"
        botao.textContent = "Ocupado";
        botao.classList.remove("livre");
        botao.classList.add("ocupado");

        // Limpar a mensagem ao marcar como "Ocupado"
        mensagem.classList.remove("show");  // Esconder a mensagem
    } else {
        // Quando a mesa estiver "Ocupada" (clique em "Ocupado")
        botao.textContent = "Livre";
        botao.classList.remove("ocupado");
        botao.classList.add("livre");

        // Exibir a mensagem "Próximo da fila!" quando estiver "Livre"
        mensagem.textContent = "Próximo da fila!";
        mensagem.classList.add("show");  // Exibe a mensagem com a animação

        // Tocar o som de alerta
        alertaSom.play();
    }
}

// Função para criar dinamicamente as 30 mesas
window.onload = () => {
    const container = document.querySelector('.mesas-container');
    for (let i = 1; i <= 30; i++) {
        const mesaDiv = document.createElement('div');
        mesaDiv.classList.add('mesa');
        mesaDiv.id = `mesa-${i}`;
        mesaDiv.innerHTML = `
            <p>Guichê ${i}</p>
            <button class="status-btn livre" onclick="alterarStatus(${i})">Livre</button>
        `;
        container.appendChild(mesaDiv);
    }
};
