document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const forgotPasswordLink = document.querySelector(".esqueceu-senha");
    const modal = document.getElementById("modalSenha");
    const closeModal = document.querySelector(".close");
    const resetForm = document.getElementById("resetForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const tipoUsuario = document.getElementById("tipoUsuario").value;
        const cpfCnpj = document.getElementById("cpfCnpj").value.replace(/\D/g, "").trim();
        const senha = document.getElementById("senha").value.trim();

        if (!tipoUsuario) {
            alert("Selecione um tipo de usuário!");
            return;
        }

        const chaveStorage = tipoUsuario === "doador" ? "doadores" : "instituicoes";
        const usuarios = JSON.parse(localStorage.getItem(chaveStorage)) || [];

        const usuarioEncontrado = usuarios.find(usuario =>
            tipoUsuario === "doador" ? usuario.cpf === cpfCnpj : usuario.cnpj === cpfCnpj
        );

        if (!usuarioEncontrado || usuarioEncontrado.senha !== senha) {
            alert("CPF/CNPJ ou senha incorretos!");
            return;
        }

        alert(`Bem-vindo, ${usuarioEncontrado.nome}!`);
        window.location.href = tipoUsuario === "doador" ? "/pages/inicio_doador.html" : "/pages/inicio_instituicao.html";
    });

    // Redefinição de senha
    forgotPasswordLink.addEventListener("click", () => modal.style.display = "block");
    closeModal.addEventListener("click", () => modal.style.display = "none");

    resetForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Senha redefinida com sucesso!");
        modal.style.display = "none";
    });
});
