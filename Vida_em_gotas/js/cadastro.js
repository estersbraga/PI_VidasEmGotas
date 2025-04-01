document.addEventListener("DOMContentLoaded", function() {
    const formInstituicao = document.getElementById("cadastroInstituicaoForm");
    const formDoador = document.getElementById("cadastroDoadorForm");

    if (formInstituicao) {
        formInstituicao.addEventListener("submit", function(event) {
            event.preventDefault();
            const dados = {
                nome: document.getElementById("nome").value,
                cnpj: document.getElementById("cnpj").value,
                telefone: document.getElementById("telefone").value,
                endereco: document.getElementById("endereco").value,
                senha: document.getElementById("senha").value,
                tipoSanguineoNecessario: document.getElementById("tipoSanguineoNecessario").value
            };

            salvarCadastro("instituicoes", dados, "inicio_instituicao.html"); // Agora redireciona corretamente
        });
    }

    if (formDoador) {
        formDoador.addEventListener("submit", function(event) {
            event.preventDefault();
            const dados = {
                nome: document.getElementById("nome").value,
                cpf: document.getElementById("cpf").value,
                sexo: document.getElementById("sexo").value,
                estado: document.getElementById("estado").value,
                senha: document.getElementById("senha").value,
                tipoSanguineo: document.getElementById("tipoSanguineo").value
            };

            salvarCadastro("doadores", dados, "inicio_doador.html"); // Agora redireciona corretamente
        });
    }

    function salvarCadastro(tipo, dados, redirecionamento) {
        let cadastros = JSON.parse(localStorage.getItem(tipo)) || [];
        cadastros.push(dados);
        localStorage.setItem(tipo, JSON.stringify(cadastros));

        alert("Cadastro concluído!");
        window.location.href = redirecionamento; // Redireciona para a página correta
    }
});
