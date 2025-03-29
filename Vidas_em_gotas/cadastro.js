document.addEventListener("DOMContentLoaded", function() {
    const formInstituicao = document.getElementById("cadastroInstituicaoForm");

    if (formInstituicao) {
        formInstituicao.addEventListener("submit", function(event) {
            event.preventDefault();
            const dados = {
                nome: document.getElementById("nome").value,
                email: document.getElementById("email").value,
                cnpj: document.getElementById("cnpj").value,
                telefone: document.getElementById("telefone").value,
                estado: document.getElementById("endereco").value,
                tipoSanguineoNecessario: document.getElementById("tipoSanguineoNecessario").value 
            };
            enviarDados("login.html", dados); 
        });
    }

    const formDoador = document.getElementById("cadastroDoadorForm");

    if (formDoador) {
        formDoador.addEventListener("submit", function(event) {
            event.preventDefault();
            const dados = {
                nome: document.getElementById("nome").value,
                email: document.getElementById("email").value,
                cpf: document.getElementById("cpf").value,
                sexo: document.getElementById("sexo").value,
                estado: document.getElementById("estado").value,
                tipoSanguineo: document.getElementById("tipoSanguineo").value
            };
            enviarDados("login.html", dados); 
        });
    }

    function enviarDados(url, dados) {
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados)
        })
        .then(response => response.json())
        .then(data => {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "inicio.html"; 
        })
        .catch(error => {
            alert("Erro ao cadastrar. Tente novamente.");
        });
    }
});

// Fiz mas ta meio bugado ainda, vou ajustar em breve 