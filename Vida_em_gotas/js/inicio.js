document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const tipoUsuario = document.getElementById("tipoUsuario").value;
        const cpfCnpj = document.getElementById("cpfCnpj").value;
        const senha = document.getElementById("senha").value;

        let listaUsuarios = JSON.parse(localStorage.getItem(tipoUsuario === "doador" ? "doadores" : "instituicoes")) || [];
        let usuarioEncontrado = listaUsuarios.find(user => (user.cpf === cpfCnpj || user.cnpj === cpfCnpj) && user.senha === senha);

        if (!usuarioEncontrado) {
            alert("CPF/CNPJ ou senha inválidos!");
            return;
        }

        alert("Login realizado com sucesso!");

        if (tipoUsuario === "doador") {
            window.location.href = "/pages/inicio_doador.html";
        } else {
            window.location.href = "/pages/inicio_instituicao.html";
        }
    });
});
