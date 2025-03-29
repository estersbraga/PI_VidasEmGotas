document.addEventListener("DOMContentLoaded", function () { 
    const cpfCnpjInput = document.getElementById("cpfCnpj");
    const senhaInput = document.getElementById("senha");
    const erroCpfCnpj = document.getElementById("erroCpfCnpj");
    const erroSenha = document.getElementById("erroSenha");
    const form = document.getElementById("loginForm");

    cpfCnpjInput.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, ""); 
    });

    // Limitar a senha a 8 caracteres
    senhaInput.addEventListener("input", function () {
        if (this.value.length > 8) {
            this.value = this.value.slice(0, 8); 
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio até validar

        const cpfCnpj = cpfCnpjInput.value;
        const senha = senhaInput.value;
        let isValid = true;

        // Funcionando a parte dos caracteres, mas por algum motivo o do cpf ainda não
        if (cpfCnpj.length === 11) {
            erroCpfCnpj.textContent = ""; 
        } else if (cpfCnpj.length === 14) {
            erroCpfCnpj.textContent = ""; 
        } else {
            erroCpfCnpj.textContent = "CPF deve ter 11 dígitos ou CNPJ deve ter 14 dígitos!";
            isValid = false;
        }

        if (senha.length !== 8) {
            erroSenha.textContent = "Senha deve ter exatamente 8 dígitos!";
            isValid = false;
        } else {
            erroSenha.textContent = "";
        }

        if (isValid) {
            alert("Login realizado com sucesso!");
            form.submit();
        }
    });
});

// Ainda não testei mas vou terminar em breve.