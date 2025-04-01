document.addEventListener('DOMContentLoaded', function() {
    // Elementos dos botões
    const deleteButton = document.getElementById('deleteButton');
    const editButton = document.getElementById('editButton');
    const confirmDeleteButton = document.getElementById('confirmDeleteButton');
    const cancelDeleteButton = document.getElementById('cancelDeleteButton');
    const backButton = document.querySelector('.back-button');
    
    // Elementos do pop-up
    const deletePopup = document.getElementById('deletePopup');
    const overlay = document.getElementById('overlay');
    
    // Função para mostrar o pop-up de confirmação de exclusão
    function showDeletePopup() {
        deletePopup.style.display = 'block';
        overlay.style.display = 'block';
        
        // Adicionar animação de entrada
        deletePopup.style.animation = 'popIn 0.3s forwards';
    }
    
    // Função para esconder o pop-up
    function hideDeletePopup() {
        // Adicionar animação de saída
        deletePopup.style.animation = 'popOut 0.3s forwards';
        
        // Aguardar a animação terminar antes de esconder
        setTimeout(() => {
            deletePopup.style.display = 'none';
            overlay.style.display = 'none';
        }, 300);
    }
    
    // Adicionar animações CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes popIn {
            0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        
        @keyframes popOut {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(0.9); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Botão de excluir agendamento
    deleteButton.addEventListener('click', function() {
        showDeletePopup();
    });
    
    // Botão de confirmar exclusão
    confirmDeleteButton.addEventListener('click', function() {
        // Aqui você adicionaria a lógica para excluir o agendamento
        hideDeletePopup();
        
        // Redirecionar para outra página ou mostrar mensagem de sucesso
        setTimeout(() => {
            alert('Agendamento excluído com sucesso!');
            window.location.href = 'agendamento.html'; // Redirecionar para a página inicial
        }, 300);
    });
    
    // Botão de cancelar exclusão
    cancelDeleteButton.addEventListener('click', function() {
        hideDeletePo
    });
});