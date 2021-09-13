"use strict";
var Fatura = /** @class */ (function () {
    function Fatura(numeros, descricao, quantidade, preco) {
        this.numeros = numeros;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.preco = preco;
    }
    Fatura.prototype.getNumeros = function () {
        return this.numeros;
    };
    Fatura.prototype.getDescricao = function () {
        return this.descricao;
    };
    Fatura.prototype.getQuantidade = function () {
        return this.quantidade;
    };
    Fatura.prototype.getPreco = function () {
        return this.preco;
    };
    Fatura.prototype.setNumeros = function (numeros) {
        if (numeros.length < 1) {
            throw new Error('Informe números válidos');
        }
        this.numeros = numeros;
    };
    Fatura.prototype.setDescricao = function (descricao) {
        if (descricao.length < 1) {
            throw new Error('Descrição inválida');
        }
        this.descricao = descricao;
    };
    Fatura.prototype.setQuantidade = function (quantidade) {
        if (quantidade < 1) {
            throw new Error('Quantidade inválida');
        }
        this.quantidade = quantidade;
    };
    Fatura.prototype.setPreco = function (preco) {
        if (preco < 1) {
            throw new Error('Preço inválido');
        }
        this.preco = preco;
    };
    Fatura.prototype.PrecoFinal = function () {
        return "O pre\u00E7o final da fatura de " + this.preco + " reais \u00E9 multiplicado pela quantidade " + this.quantidade + ", resultando em: R$ " + this.preco * this.quantidade;
    };
    return Fatura;
}());
var fatura = new Fatura('20210910', 'compra cartão de crédito', 2, 300);
console.log(fatura);
console.log(fatura.PrecoFinal());
try {
    fatura.setNumeros('');
    console.log(fatura);
}
catch (error) {
    console.log(error.message);
}
try {
    fatura.setDescricao('');
    console.log(fatura);
}
catch (error) {
    console.log(error.message);
}
try {
    fatura.setQuantidade(0);
    console.log(fatura);
}
catch (error) {
    console.log(error.message);
}
try {
    fatura.setPreco(0);
    console.log(fatura);
}
catch (error) {
    console.log(error.message);
}
