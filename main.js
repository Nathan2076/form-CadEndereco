"use strict";  // Modo restrito
// https://viacep.com.br

// Função para limpar formulário

const limparForm = (endereco) => {
    document.getElementById("rua").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
}