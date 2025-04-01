document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const tipoUsuario = document.getElementById("tipoUsuario").value;
        const cpfCnpj = document.getElementById("cpfCnpj").value.replace(/\D/g, "").trim();
        const senha = document.getElementById("senha").value.trim();
        const erroCpfCnpj = document.getElementById("erroCpfCnpj");
        const erroSenha = document.getElementById("erroSenha");

        erroCpfCnpj.textContent = "";
        erroSenha.textContent = "";

        if (!tipoUsuario) {
            erroCpfCnpj.textContent = "Selecione um tipo de usuário!";
            return;
        }

        const chaveStorage = tipoUsuario === "doador" ? "doadores" : "instituicoes";
        const usuarios = JSON.parse(localStorage.getItem(chaveStorage)) || [];

        const usuarioEncontrado = usuarios.find(usuario =>
            tipoUsuario === "doador" ? usuario.cpf === cpfCnpj : usuario.cnpj === cpfCnpj
        );

        if (!usuarioEncontrado) {
            erroCpfCnpj.textContent = "Usuário não encontrado!";
            return;
        }

        if (usuarioEncontrado.senha !== senha) {
            erroSenha.textContent = "Senha incorreta!";
            return;
        }

        alert(`Bem-vindo, ${usuarioEncontrado.nome}!`);

        window.location.href = tipoUsuario === "doador" ? "/pages/inicio_doador.html" : "/pages/inicio_instituicao";
    });
});
