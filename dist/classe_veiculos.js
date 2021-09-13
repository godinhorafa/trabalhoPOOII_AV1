"use strict";
var Veiculos = /** @class */ (function () {
    function Veiculos(modelo, marca, ano, valorLocacao, quantidadeDiarias) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
        this.valorLocacao = valorLocacao;
        this.quantidadeDiarias = quantidadeDiarias;
    }
    Veiculos.prototype.getModelo = function () {
        return this.modelo;
    };
    Veiculos.prototype.getMarca = function () {
        return this.marca;
    };
    Veiculos.prototype.getAno = function () {
        return this.ano;
    };
    Veiculos.prototype.getValorLocacao = function () {
        return this.valorLocacao;
    };
    Veiculos.prototype.getQuantidadeDias = function () {
        return this.quantidadeDiarias;
    };
    Veiculos.prototype.setModelo = function (modelo) {
        if (modelo.length < 1) {
            throw new Error('Informe um modelo válido');
        }
        this.modelo = modelo;
    };
    Veiculos.prototype.setMarca = function (marca) {
        if (marca.length < 1) {
            throw new Error('Informe uma marca válida');
        }
        this.marca = marca;
    };
    Veiculos.prototype.setAno = function (ano) {
        if (ano.length < 4) {
            throw new Error('Informe um ano válido');
        }
        this.ano = ano;
    };
    Veiculos.prototype.setValorLocacao = function (valorLocacao) {
        if (valorLocacao < 1) {
            throw new Error('Informe um valor de locação válido');
        }
        this.valorLocacao = valorLocacao;
    };
    Veiculos.prototype.setQuantidadeDias = function (quantidadeDiarias) {
        if (quantidadeDiarias < 1) {
            throw new Error('Informe um número de diárias válido');
        }
        this.quantidadeDiarias = quantidadeDiarias;
    };
    Veiculos.prototype.Passeio = function () {
        return "Para a quantidade de " + this.quantidadeDiarias + " dias, para o valor R$ " + this.valorLocacao + " da di\u00E1ria, o passeio ficar\u00E1 " + this.quantidadeDiarias * this.valorLocacao + " reais";
    };
    return Veiculos;
}());
var veiculos = new Veiculos('GLA 250', 'Mercedes', '2020', 400, 5);
console.log(veiculos);
console.log(veiculos.Passeio());
//testes de validação dados do Veículo
try {
    veiculos.setModelo('');
    console.log(veiculos.getModelo());
}
catch (error) {
    console.log(error.message);
}
try {
    veiculos.setMarca('');
    console.log(veiculos.getMarca());
}
catch (error) {
    console.log(error.message);
}
try {
    veiculos.setAno('');
    console.log(veiculos.getAno());
}
catch (error) {
    console.log(error.message);
}
try {
    veiculos.setValorLocacao(0);
    console.log(veiculos.getValorLocacao());
}
catch (error) {
    console.log(error.message);
}
try {
    veiculos.setQuantidadeDias(0);
    console.log(veiculos.getQuantidadeDias());
}
catch (error) {
    console.log(error.message);
}
