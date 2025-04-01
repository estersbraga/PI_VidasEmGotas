// Função para criar o logo personalizado
document.addEventListener('DOMContentLoaded', function() {
    // Criar o logo SVG
    const createLogo = () => {
        const logoContainer = document.querySelector('.logo');
        
        // Remover a imagem existente
        const oldImg = logoContainer.querySelector('img');
        if (oldImg) {
            logoContainer.removeChild(oldImg);
        }
        
        // Criar o SVG do logo
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "30");
        svg.setAttribute("height", "30");
        svg.setAttribute("viewBox", "0 0 24 24");
        
        // Criar o coração
        const heart = document.createElementNS("http://www.w3.org/2000/svg", "path");
        heart.setAttribute("d", "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z");
        heart.setAttribute("fill", "#d63031");
        
        // Criar a gota
        const drop = document.createElementNS("http://www.w3.org/2000/svg", "path");
        drop.setAttribute("d", "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z");
        drop.setAttribute("fill", "white");
        drop.setAttribute("transform", "scale(0.5) translate(12, 12)");
        
        svg.appendChild(heart);
        svg.appendChild(drop);
        
        // Inserir o SVG antes do texto
        logoContainer.insertBefore(svg, logoContainer.firstChild);
    };
    
    createLogo();
    
    // Adicionar funcionalidade aos botões
    const menuButtons = document.querySelectorAll('.menu-button');
    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`Você clicou em: ${this.textContent}`);
        });
    });
    
    // Botão de relatório
    const reportButton = document.querySelector('.report-button');
    reportButton.addEventListener('click', function() {
        alert('Gerando relatório...');
    });
    
    // Botão de voltar
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', function() {
        alert('Voltando para a página anterior...');
    });
    
    // Simular carregamento das imagens de campanha
    const createCampaignImages = () => {
        const campaignCards = document.querySelectorAll('.campaign-card');
        
        // URLs das imagens de campanha (normalmente seriam carregadas do servidor)
        const campaignImages = [
            'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="350" viewBox="0 0 200 350"><rect width="100%" height="100%" fill="%23ffeddf"/><text x="50%" y="30%" font-family="Arial" font-size="14" fill="%23d63031" text-anchor="middle">WORLD</text><text x="50%" y="40%" font-family="Arial" font-size="18" font-weight="bold" fill="%23d63031" text-anchor="middle">Blood Donor</text><text x="50%" y="50%" font-family="Arial" font-size="18" font-weight="bold" fill="%23d63031" text-anchor="middle">Day</text><rect x="60" y="150" width="80" height="120" fill="%23fff" stroke="%23d63031"/><rect x="80" y="130" width="40" height="20" fill="%23d63031"/><circle cx="100" cy="200" r="20" fill="%23d63031"/></svg>',
            
            'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="350" viewBox="0 0 200 350"><rect width="100%" height="100%" fill="%23ffeddf"/><text x="50%" y="40%" font-family="Arial" font-size="16" fill="%23d63031" text-anchor="middle">Donate blood,</text><text x="50%" y="50%" font-family="Arial" font-size="16" font-weight="bold" fill="%23d63031" text-anchor="middle">save a life!</text><text x="50%" y="60%" font-family="Arial" font-size="14" fill="%23d63031" text-anchor="middle">April 14th - 2023</text><rect x="70" y="150" width="20" height="100" fill="%23fff" stroke="%23d63031"/><rect x="110" y="150" width="20" height="100" fill="%23fff" stroke="%23d63031"/><circle cx="80" cy="140" r="10" fill="%23d63031"/><circle cx="120" cy="140" r="10" fill="%23d63031"/></svg>',
            
            'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="350" viewBox="0 0 200 350"><rect width="100%" height="100%" fill="%23ffeddf"/><text x="50%" y="30%" font-family="Arial" font-size="14" fill="%23d63031" text-anchor="middle">WORLD</text><text x="50%" y="40%" font-family="Arial" font-size="18" font-weight="bold" fill="%23d63031" text-anchor="middle">Blood Donor</text><text x="50%" y="50%" font-family="Arial" font-size="18" font-weight="bold" fill="%23d63031" text-anchor="middle">Day</text><path d="M50,150 C50,100 150,100 150,150 C150,200 100,250 100,250" fill="none" stroke="%23d63031" stroke-width="3"/><circle cx="100" cy="250" r="10" fill="%23d63031"/><circle cx="150" cy="150" r="20" fill="white" stroke="%23d63031" stroke-width="2"/></svg>',
            
            'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="350" viewBox="0 0 200 350"><rect width="100%" height="100%" fill="%23ffeddf"/><text x="50%" y="30%" font-family="Arial" font-size="16" font-weight="bold" fill="%23d63031" text-anchor="middle">Every drop</text><text x="50%" y="40%" font-family="Arial" font-size="16" font-weight="bold" fill="%23d63031" text-anchor="middle">counts</text><text x="50%" y="50%" font-family="Arial" font-size="14" fill="%23d63031" text-anchor="middle">Donate today!</text><rect x="60" y="150" width="80" height="60" fill="white" stroke="%23d63031"/><line x1="70" y1="220" x2="70" y2="250" stroke="%23d63031" stroke-width="2"/><line x1="100" y1="220" x2="100" y2="250" stroke="%23d63031" stroke-width="2"/><line x1="130" y1="220" x2="130" y2="250" stroke="%23d63031" stroke-width="2"/><circle cx="100" cy="180" r="15" fill="%23d63031"/></svg>'
        ];
        
        // Atribuir imagens aos cards
        campaignCards.forEach((card, index) => {
            if (index < campaignImages.length) {
                const img = card.querySelector('img');
                if (img) {
                    img.src = campaignImages[index];
                }
            }
        });
    };
    
    createCampaignImages();
});