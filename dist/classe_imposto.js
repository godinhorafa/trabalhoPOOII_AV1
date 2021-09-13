"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Central = /** @class */ (function () {
    function Central(nome, rendaAnual) {
        this.nome = nome;
        this.rendaAnual = rendaAnual;
    }
    Central.prototype.getNome = function () {
        return this.nome;
    };
    Central.prototype.getRendaAnual = function () {
        return this.rendaAnual;
    };
    Central.prototype.setNome = function (nome) {
        if (nome.length < 1) {
            throw new Error('Nome inválido');
        }
        this.nome = nome;
    };
    Central.prototype.setRendaAnual = function (rendaAnual) {
        if (rendaAnual < 1) {
            throw new Error('Renda anual declarada é inválida');
        }
        this.rendaAnual = rendaAnual;
    };
    return Central;
}());
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(nome, rendaAnual, gastoSaude) {
        var _this = _super.call(this, nome, rendaAnual) || this;
        _this.gastoSaude = gastoSaude;
        return _this;
    }
    PessoaFisica.prototype.getGastoSaude = function () {
        return this.gastoSaude;
    };
    PessoaFisica.prototype.setGastoSaude = function (gastoSaude) {
        if (gastoSaude < 1) {
            throw new Error('Gastos com saúde informado é inválido');
        }
        this.gastoSaude = gastoSaude;
    };
    PessoaFisica.prototype.Imposto = function () {
        if (this.getRendaAnual() < 20000) {
            return "" + ((this.getRendaAnual() / 100) * 15 - (this.gastoSaude / 100) * 50);
        }
        else if (this.getRendaAnual() > 20000) {
            return "" + ((this.getRendaAnual() / 100) * 25 - (this.gastoSaude / 100) * 50);
        }
    };
    return PessoaFisica;
}(Central));
var pessoaFisica = new PessoaFisica('Rafaella', 18000, 1000);
var pessoaFisica2 = new PessoaFisica('Louis', 70000, 1500);
//testes de validação Pessoa Física
try {
    pessoaFisica.setNome('');
    console.log(pessoaFisica);
}
catch (error) {
    console.log(error.message);
}
try {
    pessoaFisica.setRendaAnual(0);
    console.log(pessoaFisica);
}
catch (error) {
    console.log(error.message);
}
try {
    pessoaFisica.setGastoSaude(0);
    console.log(pessoaFisica);
}
catch (error) {
    console.log(error.message);
}
console.log("Imposto de renda de " + pessoaFisica.getNome() + " \u00E9 R$: ", pessoaFisica.Imposto());
console.log("Imposto de renda de " + pessoaFisica2.getNome() + " \u00E9 R$: ", pessoaFisica2.Imposto());
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica(nome, rendaAnual, numFuncionarios) {
        var _this = _super.call(this, nome, rendaAnual) || this;
        _this.numFuncionarios = numFuncionarios;
        return _this;
    }
    PessoaJuridica.prototype.getNumFuncionarios = function () {
        return this.numFuncionarios;
    };
    PessoaJuridica.prototype.setNumFuncionarios = function (numFuncionarios) {
        if (numFuncionarios < 1) {
            throw new Error('Número de funcionários inválido');
        }
        this.numFuncionarios = numFuncionarios;
    };
    PessoaJuridica.prototype.Imposto = function () {
        if (this.numFuncionarios > 10) {
            return "" + (this.getRendaAnual() / 100) * 14;
        }
        else {
            return "" + (this.getRendaAnual() / 100) * 16;
        }
    };
    return PessoaJuridica;
}(Central));
var pessoaJuridica = new PessoaJuridica('SpaceX', 100000, 800);
var pessoaJuridica2 = new PessoaJuridica('Loja do Zé', 40000, 10);
//testes de validação Pessoa Jurídica
try {
    pessoaJuridica.setNumFuncionarios(0);
    console.log(pessoaJuridica);
}
catch (error) {
    console.log(error.message);
}
console.log("Imposto de renda da empresa " + pessoaJuridica.getNome() + " \u00E9 R$: ", pessoaJuridica.Imposto());
console.log("Imposto de renda da empresa " + pessoaJuridica2.getNome() + " \u00E9 R$: ", pessoaJuridica2.Imposto());
