document.addEventListener('DOMContentLoaded', function() {
    // Elementos do calendário
    const calendarDays = document.querySelectorAll('.calendar-day');
    const monthNavs = document.querySelectorAll('.month-nav');
    const monthName = document.querySelector('.month-name');
    
    // Elementos do dropdown
    const dropdownSelected = document.querySelector('.dropdown-selected');
    const dropdownOptions = document.querySelector('.dropdown-options');
    const dropdownOptionItems = document.querySelectorAll('.dropdown-option');
    
    // Elementos de horário
    const timeOptions = document.querySelectorAll('.time-option');
    const customTimeLink = document.querySelector('.custom-time');
    
    // Botões
    const scheduleButton = document.querySelector('.schedule-button');
    const confirmButton = document.querySelector('.confirm-button');
    const backButton = document.querySelector('.back-button');
    
    // Elementos do pop-up
    const confirmationPopup = document.getElementById('confirmationPopup');
    const overlay = document.getElementById('overlay');
    
    // Estado da seleção
    let selectedDay = null;
    let selectedUnit = null;
    let selectedTime = null;
    
    // Meses em português
    const months = [
        'JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 
        'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 
        'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'
    ];
    
    // Índice do mês atual (6 para julho)
    let currentMonthIndex = 6;
    
    // Função para atualizar o mês exibido
    function updateMonth() {
        monthName.textContent = months[currentMonthIndex];
        // Aqui você atualizaria os dias do calendário com base no mês selecionado
    }
    
    // Navegação entre meses
    monthNavs.forEach((nav, index) => {
        nav.addEventListener('click', function() {
            if (index === 0) { // Botão anterior
                currentMonthIndex = (currentMonthIndex - 1 + 12) % 12;
            } else { // Botão próximo
                currentMonthIndex = (currentMonthIndex + 1) % 12;
            }
            updateMonth();
        });
    });
    
    // Seleção de dia no calendário
    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            // Remover seleção anterior
            if (selectedDay) {
                selectedDay.classList.remove('selected');
            }
            
            // Adicionar nova seleção
            this.classList.add('selected');
            selectedDay = this;
        });
    });
    
    // Dropdown de unidades
    dropdownSelected.addEventListener('click', function() {
        dropdownOptions.style.display = 
            dropdownOptions.style.display === 'block' ? 'none' : 'block';
    });
    
    // Fechar dropdown ao clicar fora
    document.addEventListener('click', function(event) {
        if (!dropdownSelected.contains(event.target) && 
            !dropdownOptions.contains(event.target)) {
            dropdownOptions.style.display = 'none';
        }
    });
    
    // Seleção de unidade
    dropdownOptionItems.forEach(option => {
        option.addEventListener('click', function() {
            selectedUnit = this.textContent;
            dropdownSelected.querySelector('span').textContent = selectedUnit;
            dropdownOptions.style.display = 'none';
        });
    });
    
    // Seleção de horário
    timeOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remover seleção anterior
            timeOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Adicionar nova seleção
            this.classList.add('selected');
            selectedTime = this.textContent;
        });
    });
    
    // Link para escolher outro horário
    customTimeLink.addEventListener('click', function(e) {
        e.preventDefault();
        const customTime = prompt('Digite o horário desejado (formato HH:MM):');
        
        if (customTime) {
            // Validar formato do horário (simplificado)
            if (/^\d{2}:\d{2}$/.test(customTime)) {
                // Remover seleção anterior
                timeOptions.forEach(opt => opt.classList.remove('selected'));
                selectedTime = customTime;
                alert(`Horário personalizado selecionado: ${customTime}`);
            } else {
                alert('Por favor, digite o horário no formato HH:MM');
            }
        }
    });
    
    // Botão de agendar doação
    scheduleButton.addEventListener('click', function() {
        alert('Preencha os detalhes para agendar sua doação');
    });
    
    // Função para mostrar o pop-up de confirmação
    function showConfirmationPopup() {
        confirmationPopup.style.display = 'block';
        overlay.style.display = 'block';
        
        // Fechar o pop-up após 5 segundos (opcional)
        setTimeout(function() {
            confirmationPopup.style.display = 'none';
            overlay.style.display = 'none';
            
            // Redirecionar para outra página ou resetar o formulário
            // window.location.href = 'pagina-inicial.html';
        }, 5000);
    }
    
    // Fechar o pop-up ao clicar no overlay
    overlay.addEventListener('click', function() {
        confirmationPopup.style.display = 'none';
        overlay.style.display = 'none';
    });
    
    // Botão de confirmar doação
    confirmButton.addEventListener('click', function() {
        if (!selectedDay) {
            alert('Por favor, selecione um dia no calendário');
            return;
        }
        
        if (!selectedUnit) {
            alert('Por favor, selecione uma unidade');
            return;
        }
        
        if (!selectedTime) {
            alert('Por favor, selecione um horário');
            return;
        }
        
        // Mostrar o pop-up de confirmação
        showConfirmationPopup();
    });
    
    // Botão de voltar
    backButton.addEventListener('click', function() {
        // Em uma aplicação real, você poderia usar:
        // window.history.back();
        
        // Para este exemplo, apenas mostramos um alerta
        alert('Voltando para a página anterior');
    });
});