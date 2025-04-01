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

    // Recuperar o ID do agendamento pela URL
    const urlParams = new URLSearchParams(window.location.search);
    const agendamentoId = urlParams.get('id');

    // Buscar agendamentos no localStorage
    let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    let agendamento = agendamentos.find(a => a.id == agendamentoId);

    if (agendamento) {
        document.getElementById('dia').textContent = agendamento.dia;
        document.getElementById('mes').textContent = agendamento.mes;
        document.getElementById('unidade').textContent = agendamento.unidade;
        document.getElementById('horario').textContent = agendamento.horario;
    }

    // Função para mostrar o pop-up de confirmação de exclusão
    function showDeletePopup() {
        deletePopup.style.display = 'block';
        overlay.style.display = 'block';
        deletePopup.style.animation = 'popIn 0.3s forwards';
    }

    // Função para esconder o pop-up
    function hideDeletePopup() {
        deletePopup.style.animation = 'popOut 0.3s forwards';
        setTimeout(() => {
            deletePopup.style.display = 'none';
            overlay.style.display = 'none';
        }, 300);
    }

    // Animações CSS
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
        agendamentos = agendamentos.filter(a => a.id != agendamentoId);
        localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
        hideDeletePopup();
        setTimeout(() => {
            alert('Agendamento excluído com sucesso!');
            window.location.href = 'agendamento.html';
        }, 300);
    });

    // Botão de cancelar exclusão
    cancelDeleteButton.addEventListener('click', function() {
        hideDeletePopup();
    });

    //FUNÇÃO DE EDIÇÃO
    editButton.addEventListener('click', function() {
        // Pegando os elementos que exibem os detalhes do agendamento
        const diaElement = document.querySelector('.dia');
        const horarioElement = document.querySelector('.horario');
        const unidadeElement = document.querySelector('.unidade');
    
        // Verificando se os elementos existem
        if (!diaElement || !horarioElement || !unidadeElement) {
            alert("Erro ao carregar os detalhes do agendamento. Verifique os elementos HTML.");
            return;
        }
    
        // Obtendo os valores atuais
        const diaAtual = diaElement.textContent.trim();
        const horarioAtual = horarioElement.textContent.trim();
        const unidadeAtual = unidadeElement.textContent.trim();
    
        // Pedindo os novos valores ao usuário
        const novoDia = prompt("Novo dia:", diaAtual) || diaAtual;
        const novoHorario = prompt("Novo horário:", horarioAtual) || horarioAtual;
        const novaUnidade = prompt("Nova unidade:", unidadeAtual) || unidadeAtual;
    
        // Atualizando os elementos na página
        diaElement.textContent = novoDia;
        horarioElement.textContent = novoHorario;
        unidadeElement.textContent = novaUnidade;
    
        // Atualizando no localStorage (se estiver sendo usado)
        let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
        
        // Pegando o ID do agendamento (se estiver salvo em algum atributo)
        const agendamentoId = sessionStorage.getItem('agendamentoId') || "1"; // Ajuste conforme necessário
    
        // Atualizando os dados no localStorage
        const index = agendamentos.findIndex(a => a.id == agendamentoId);
        if (index !== -1) {
            agendamentos[index].dia = novoDia;
            agendamentos[index].horario = novoHorario;
            agendamentos[index].unidade = novaUnidade;
            localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
        }
    
        alert("Agendamento atualizado com sucesso!");
    });
})    