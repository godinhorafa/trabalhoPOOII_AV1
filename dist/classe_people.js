"use strict";
var People = /** @class */ (function () {
    function People(nome, sexo, idade) {
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
    }
    People.prototype.getNome = function () {
        return this.nome;
    };
    People.prototype.getSexo = function () {
        return this.sexo;
    };
    People.prototype.getIdade = function () {
        return this.idade;
    };
    People.prototype.setNome = function (nome) {
        if (nome.length < 1) {
            throw new Error('Informe um nome válido');
        }
        this.nome = nome;
    };
    People.prototype.setSexo = function (sexo) {
        if (!People.SEXOS.includes(sexo.toUpperCase())) {
            throw new Error('Opção inválida');
        }
        this.sexo = sexo;
    };
    People.prototype.setIdade = function (idade) {
        if (idade < 1) {
            throw new Error('Idade inválida');
        }
        this.idade = idade;
    };
    People.prototype.Mensagem = function () {
        if (this.idade >= 18) {
            return "Maior de idade";
        }
        else {
            return "Menor de idade";
        }
    };
    People.SEXOS = ['MASCULINO', 'FEMININO'];
    return People;
}());
var people = new People('Rafaella', 'Feminino', 22);
console.log(people);
console.log(people.Mensagem());
//testes de validação dados da pessoa
try {
    people.setNome('');
    console.log(people);
}
catch (error) {
    console.log(error.message);
}
try {
    people.setSexo('feminino');
    console.log(people);
}
catch (error) {
    console.log(error.message);
}
try {
    people.setIdade(0);
    console.log(people);
}
catch (error) {
    console.log(error.message);
}
