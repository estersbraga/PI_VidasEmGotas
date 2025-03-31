document.addEventListener('DOMContentLoaded', function() {
    // Referências aos elementos
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const generateButton = document.getElementById('generate-report');
    const reportDataTable = document.getElementById('report-data');
    const backButton = document.querySelector('.back-button');
    
    // Formatação de data para os inputs
    function formatDateInput(input) {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 8) {
                value = value.substring(0, 8);
            }
            
            if (value.length > 4) {
                value = value.substring(0, 4) + '/' + value.substring(4);
            }
            
            if (value.length > 2) {
                value = value.substring(0, 2) + '/' + value.substring(2);
            }
            
            e.target.value = value;
        });
    }
    
    // Aplicar formatação aos inputs de data
    formatDateInput(startDateInput);
    formatDateInput(endDateInput);
    
    // Função para gerar o relatório
    generateButton.addEventListener('click', function() {
        // Aqui você adicionaria a lógica para buscar dados do servidor
        // e preencher a tabela com os resultados
        
        // Exemplo de como você poderia preencher a tabela com dados:
        // const data = fetchDataFromServer(startDateInput.value, endDateInput.value);
        // renderTableData(data);
        
        alert('Relatório gerado para o período: ' + 
              startDateInput.value + ' até ' + endDateInput.value);
    });
    
    // Função para voltar à página anterior
    backButton.addEventListener('click', function() {
        // Em uma aplicação real, você poderia usar:
        window.history.back();
        
        // Para este exemplo, também mostramos um alerta
        alert('Voltando para a página anterior');
    });
    
    // Função para renderizar dados na tabela (exemplo)
    function renderTableData(data) {
        // Limpar tabela
        reportDataTable.innerHTML = '';
        
        // Se não houver dados, mostrar linhas vazias
        if (!data || data.length === 0) {
            for (let i = 0; i < 15; i++) {
                const row = document.createElement('tr');
                for (let j = 0; j < 6; j++) {
                    const cell = document.createElement('td');
                    row.appendChild(cell);
                }
                reportDataTable.appendChild(row);
            }
            return;
        }
        
        // Preencher com dados reais
        data.forEach(item => {
            const row = document.createElement('tr');
            
            const nameCell = document.createElement('td');
            nameCell.textContent = item.nome;
            row.appendChild(nameCell);
            
            const hospitalCell = document.createElement('td');
            hospitalCell.textContent = item.hospital;
            row.appendChild(hospitalCell);
            
            const bloodTypeCell = document.createElement('td');
            bloodTypeCell.textContent = item.tipoSanguineo;
            row.appendChild(bloodTypeCell);
            
            const dateCell = document.createElement('td');
            dateCell.textContent = item.data;
            row.appendChild(dateCell);
            
            const timeCell = document.createElement('td');
            timeCell.textContent = item.horario;
            row.appendChild(timeCell);
            
            const locationCell = document.createElement('td');
            locationCell.textContent = item.local;
            row.appendChild(locationCell);
            
            reportDataTable.appendChild(row);
        });
    }
});