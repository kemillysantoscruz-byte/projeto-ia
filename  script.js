// Função para abrir o modal simulando o clique em um material
function openMaterial(title, description) {
    const modal = document.getElementById('materialModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBodyText = document.getElementById('modalBodyText');
    
    // Altera o conteúdo baseado no card clicado
    modalTitle.innerText = title;
    modalBodyText.innerText = description;
    
    // Exibe o modal na tela usando flexbox
    modal.style.display = 'flex';
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('materialModal');
    modal.style.display = 'none';
}

// Fecha o modal caso o estudante clique fora da caixinha branca
window.onclick = function(event) {
    const modal = document.getElementById('materialModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
