document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');
    const donateButton = document.querySelector('.donate-button'); // Correção do seletor

    // Adiciona evento para os botões do menu lateral
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe 'active' de todos os botões
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Redirecionamento para as páginas correspondentes
            switch (this.textContent.trim()) {
                case 'Sobre nós':
                    window.location.href = "/pages/sobre_nos.html";
                    break;
                case 'Blog':
                    window.location.href = "/pages/blog.html";
                    break;
                case 'Suporte':
                    window.location.href = "/pages/suporte.html";
                    break;
                case 'Agendamentos':
                    window.location.href = "/pages/detalhes_agendamento.html";
                    break;
            }
        });
    });

    // Evento para o botão "Agendar Doação"
    if (donateButton) {
        donateButton.addEventListener('click', function() {
            this.classList.add('elevated'); // Adiciona efeito de relevo
            window.location.href = "/pages/agendamento.html";
        });
    }
});
