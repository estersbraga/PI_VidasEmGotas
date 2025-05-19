document.addEventListener("DOMContentLoaded", function () {
    const deleteButton = document.getElementById("deleteButton");
    const deletePopup = document.getElementById("deletePopup");
    const overlay = document.getElementById("overlay");
    const cancelDeleteButton = document.getElementById("cancelDeleteButton");
    const confirmDeleteButton = document.getElementById("confirmDeleteButton");
    const editButton = document.getElementById("editButton");

    // Mostrar pop-up de exclusão
    deleteButton.addEventListener("click", function () {
        deletePopup.style.display = "block";
        overlay.style.display = "block";
    });

    // Cancelar exclusão
    cancelDeleteButton.addEventListener("click", function () {
        deletePopup.style.display = "none";
        overlay.style.display = "none";
    });

    // Confirmar exclusão
    confirmDeleteButton.addEventListener("click", function () {
        alert("Agendamento excluído com sucesso!");
        deletePopup.style.display = "none";
        overlay.style.display = "none";

        // Aqui você pode adicionar a lógica de exclusão no servidor/backend
    });

    // Edição de agendamento
    editButton.addEventListener('click', function () {
        const isEditing = editButton.textContent === 'Salvar Alterações';
        const cardDetails = document.querySelector('.card-details');
        const details = cardDetails.querySelectorAll('.detail-item');

        if (!isEditing) {
            // Transformar os textos em inputs
            details.forEach(detail => {
                const strong = detail.querySelector('strong');
                const label = strong.textContent.trim();
                const value = strong.nextSibling.textContent.trim();

                const input = document.createElement('input');
                input.type = 'text';
                input.value = value;
                input.classList.add('edit-input');
                input.setAttribute('data-label', label);

                // Limpa e reinsere o strong + input
                detail.textContent = '';
                detail.appendChild(strong);
                detail.appendChild(input);
            });

            editButton.textContent = 'Salvar Alterações';
        } else {
            // Salvar valores e voltar ao modo de visualização
            details.forEach(detail => {
                const strong = detail.querySelector('strong');
                const input = detail.querySelector('input');
                const label = strong.textContent;
                const newValue = input.value;

                detail.textContent = '';
                detail.innerHTML = `<strong>${label}</strong> ${newValue}`;
            });

            // Aqui você pode fazer um fetch/AJAX para salvar os dados no backend
            alert("Agendamento atualizado com sucesso!");

            editButton.textContent = 'Editar Agendamento';
        }
    });
});
