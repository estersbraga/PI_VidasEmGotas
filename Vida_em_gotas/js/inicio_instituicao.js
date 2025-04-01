// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navigation buttons functionality
    const navButtons = document.querySelectorAll('.nav-button');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent;
            
            // Simple navigation logic
            switch(buttonText) {
                case 'Sobre nós':
                    // Fetch about page content from backend
                    fetchPageContent('about');
                    break;
                case 'Blog':
                    // Fetch blog content from backend
                    fetchPageContent('blog');
                    break;
                case 'Suporte':
                    // Fetch support content from backend
                    fetchPageContent('support');
                    break;
            }
        });
    });
    
    // Report button functionality
    const reportButton = document.querySelector('.report-button');
    
    reportButton.addEventListener('click', function() {
        // Fetch report data from backend
        fetchReportData();
    });
    
    // Back button functionality
    const backButton = document.querySelector('.back-button');
    
    backButton.addEventListener('click', function(e) {
        e.preventDefault();
        // Go back to previous page or dashboard
        window.history.back();
    });
    
    // Function to fetch page content from backend
    function fetchPageContent(page) {
        fetch(`/api/${page}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(`Loaded ${page} content:`, data);
                // Update UI with the fetched content
                // This would be implemented based on the specific page requirements
            })
            .catch(error => {
                console.error(`Error fetching ${page} content:`, error);
                alert(`Não foi possível carregar o conteúdo de ${page}. Por favor, tente novamente mais tarde.`);
            });
    }
    
    // Function to fetch report data from backend
    function fetchReportData() {
        fetch('/api/reports')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Report data:', data);
                // Display report data or redirect to reports page
                // This would be implemented based on the specific requirements
            })
            .catch(error => {
                console.error('Error fetching report data:', error);
                alert('Não foi possível carregar os relatórios. Por favor, tente novamente mais tarde.');
            });
    }
});