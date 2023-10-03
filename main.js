"use strict";  // Modo restrito
// https://viacep.com.br

// Função para limpar formulário

const limparForm = (endereco) => {
    document.getElementById("rua").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

// Responsável pelo preenchimento do formulário

const preencherForm = (endereco) => {
    document.getElementById("rua").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
}

// Função para consumo de API da Via CEP

const pesquisarCep = async() => {
    limparForm();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;

    if (cepValido(cep.value)) {
        const dados = await fetch(url);  // Espera
        const address = await dados.json();  // Retorna dados no formato JSON
        
        if (address.hasOwnProperty("erro")) {
            alert("CEP não encontrado");
        } else {
            preencherForm(address);
        }
    } else {
        alert("CEP incorreto");
    }
}

// Adiciona um evento DOM no input do CEP

document.getElementById("cep").addEventListener("focusout", pesquisarCep);