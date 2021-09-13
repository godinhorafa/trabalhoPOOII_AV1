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
var Vendedores = /** @class */ (function () {
    function Vendedores(nome, salario, valorVenda) {
        this.nome = nome;
        this.salario = salario;
        this.valorVenda = valorVenda;
    }
    Vendedores.prototype.getNome = function () {
        return this.nome;
    };
    Vendedores.prototype.getSalario = function () {
        return this.salario;
    };
    Vendedores.prototype.getValorVenda = function () {
        return this.valorVenda;
    };
    Vendedores.prototype.setNome = function (nome) {
        if (nome.length < 1) {
            throw new Error('Nome inválido');
        }
        this.nome = nome;
    };
    Vendedores.prototype.setSalario = function (salario) {
        if (salario < 1) {
            throw new Error('Salário declarado é inválido');
        }
        this.salario = salario;
    };
    Vendedores.prototype.setValorVenda = function (valorVenda) {
        if (valorVenda < 1) {
            throw new Error('Valor da venda inválido');
        }
        this.valorVenda = valorVenda;
    };
    Vendedores.prototype.Desconto = function () {
        return (this.salario / 100) * 8;
    };
    return Vendedores;
}());
var VendedorPessoaFisica = /** @class */ (function (_super) {
    __extends(VendedorPessoaFisica, _super);
    function VendedorPessoaFisica(nome, salario, valorVenda, regiao) {
        var _this = _super.call(this, nome, salario, valorVenda) || this;
        _this.regiao = regiao;
        return _this;
    }
    VendedorPessoaFisica.prototype.getRegiao = function () {
        return this.regiao;
    };
    VendedorPessoaFisica.prototype.setRegiao = function (regiao) {
        if (!VendedorPessoaFisica.REGIOES.includes(regiao.toUpperCase())) {
            throw new Error("Região inválida");
        }
        this.regiao = regiao;
    };
    VendedorPessoaFisica.prototype.Comissao = function () {
        if (this.regiao == 'SUL') {
            return (this.getValorVenda() / 100) * 10;
        }
        else if (this.regiao == 'SUDESTE') {
            return (this.getValorVenda() / 100) * 12;
        }
        else if (this.regiao == 'CENTRO-OESTE') {
            return (this.getValorVenda() / 100) * 14;
        }
        else if (this.regiao == 'NORTE') {
            return (this.getValorVenda() / 100) * 15;
        }
        else {
            return (this.getValorVenda() / 100) * 17;
        }
    };
    VendedorPessoaFisica.prototype.SalarioAjustado = function () {
        return this.getSalario() + this.Comissao();
    };
    VendedorPessoaFisica.REGIOES = ['SUL', 'SUDESTE', 'CENTRO-OESTE', 'NORTE', 'NORDESTE'];
    return VendedorPessoaFisica;
}(Vendedores));
var vendedorPessoaFisica = new VendedorPessoaFisica('Rafaella', 5000, 4000, 'sudeste');
console.log(vendedorPessoaFisica.Comissao());
console.log(vendedorPessoaFisica.SalarioAjustado());
//testes de validação Pessoa Física
try {
    vendedorPessoaFisica.setNome('');
}
catch (error) {
    console.log(error.message);
}
try {
    vendedorPessoaFisica.setSalario(0);
}
catch (error) {
    console.log(error.message);
}
try {
    vendedorPessoaFisica.setValorVenda(0);
}
catch (error) {
    console.log(error.message);
}
try {
    vendedorPessoaFisica.setRegiao('Centro-sul');
}
catch (error) {
    console.log(error.message);
}
var VendedorPessoaJuridica = /** @class */ (function (_super) {
    __extends(VendedorPessoaJuridica, _super);
    function VendedorPessoaJuridica(nome, salario, valorVenda, nomeEmpresa, totalFuncionarios) {
        var _this = _super.call(this, nome, salario, valorVenda) || this;
        _this.nomeEmpresa = nomeEmpresa;
        _this.totalFuncionarios = totalFuncionarios;
        return _this;
    }
    VendedorPessoaJuridica.prototype.getNomeEmpresa = function () {
        return this.nomeEmpresa;
    };
    VendedorPessoaJuridica.prototype.getTotalFuncionarios = function () {
        return this.totalFuncionarios;
    };
    VendedorPessoaJuridica.prototype.setNomeEmpresa = function (nomeEmpresa) {
        if (nomeEmpresa.length < 1) {
            throw new Error('Nome inválido');
        }
        this.nomeEmpresa = nomeEmpresa;
    };
    VendedorPessoaJuridica.prototype.setTotalFuncionarios = function (totalFuncionarios) {
        if (totalFuncionarios < 1) {
            throw new Error('Número de funcionários inválido');
        }
        this.totalFuncionarios = totalFuncionarios;
    };
    VendedorPessoaJuridica.prototype.Comissao = function () {
        if (this.getValorVenda() < 5000) {
            return (this.getValorVenda() / 100) * 2;
        }
        else if (this.getValorVenda() >= 5000 && this.getValorVenda() < 10000) {
            return (this.getValorVenda() / 100) * 4;
        }
        else {
            return (this.getValorVenda() / 100) * 6;
        }
    };
    VendedorPessoaJuridica.prototype.SalarioTotal = function () {
        if (this.totalFuncionarios < 100) {
            return this.getSalario() + this.Comissao() + 200;
        }
        else {
            return this.getSalario() + this.Comissao() + 300;
        }
    };
    return VendedorPessoaJuridica;
}(Vendedores));
var vendedorPessoaJuridica = new VendedorPessoaJuridica('Elena', 8000, 2000, 'RG Soluções', 120);
console.log(vendedorPessoaJuridica.Comissao());
console.log(vendedorPessoaJuridica.SalarioTotal());
//testes de validação Pessoa Jurídica
try {
    vendedorPessoaJuridica.setTotalFuncionarios(0);
}
catch (error) {
    console.log(error.message);
}
try {
    vendedorPessoaJuridica.setNomeEmpresa('');
}
catch (error) {
    console.log(error.message);
}
