// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões de navegação
    const navButtons = document.querySelectorAll('.nav-button');

    // Adiciona evento de clique para cada botão do menu lateral
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Identifica qual botão foi clicado e redireciona para a página correspondente
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
            }
        });
    });

    // Seleciona o botão de relatório
    const reportButton = document.querySelector('.report-button');

    // Adiciona funcionalidade ao botão de relatório
    if (reportButton) {
        reportButton.addEventListener('click', function() {
            window.location.href = "/pages/relatorio.html";
        });
    }

    // Seleciona o botão de voltar
    const backButton = document.querySelector('.back-button');

    // Adiciona funcionalidade ao botão de voltar
    if (backButton) {
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = "/pages/inicio.html"; // Retorna à página inicial
        });
    }
});
