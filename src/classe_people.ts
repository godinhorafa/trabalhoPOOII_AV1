class People {

    static SEXOS = ['MASCULINO', 'FEMININO']

    private nome: string;
    private sexo: string;
    private idade: number;

    constructor(nome: string, sexo: string, idade: number) {
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
    }

    public getNome() {
        return this.nome
    }

    public getSexo() {
        return this.sexo
    }

    public getIdade() {
        return this.idade
    }

    public setNome(nome: string) {
        if(nome.length < 1) {
            throw new Error('Informe um nome válido')
        }
        this.nome = nome;
    }

    public setSexo(sexo: string) {
        if (!People.SEXOS.includes(sexo.toUpperCase())) {
            throw new Error('Opção inválida')
        }
        this.sexo = sexo
    }

    public setIdade(idade: number) {
        if (idade < 1) {
            throw new Error('Idade inválida')
        }
        this.idade = idade
    }

    public Mensagem():string {
        if (this.idade >= 18) {
            return `Maior de idade`
        } else {
            return `Menor de idade`
        }
    }
}

const people = new People('Rafaella', 'Feminino', 22)
console.log(people)
console.log(people.Mensagem())

//testes de validação dados da pessoa

try {
    people.setNome('')
    console.log(people)
} catch(error) {
    console.log(error.message)
}

try {
    people.setSexo('feminino')
    console.log(people)
} catch(error) {
    console.log(error.message)
}

try {
    people.setIdade(0)
    console.log(people)
} catch(error) {
    console.log(error.message)
}
