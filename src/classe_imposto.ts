
class Central {
    private nome: string;
    private rendaAnual: number;

    constructor(nome: string, rendaAnual: number) {
        this.nome = nome;
        this.rendaAnual = rendaAnual;
    }

    public getNome() {
        return this.nome
    }

    public getRendaAnual() {
        return this.rendaAnual
    }
    
    public setNome(nome: string) {
        if (nome.length < 1) {
            throw new Error('Nome inválido')
        } 
        this.nome = nome
    }

    public setRendaAnual(rendaAnual: number) {
        if (rendaAnual < 1) {
            throw new Error('Renda anual declarada é inválida')
        }
        this.rendaAnual = rendaAnual
    }
}

class PessoaFisica extends Central {
    private gastoSaude: number;

    constructor(nome: string, rendaAnual: number, gastoSaude: number) {
        super(nome, rendaAnual)
        this.gastoSaude = gastoSaude;
    }

    public getGastoSaude() {
        return this.gastoSaude
    }

    public setGastoSaude(gastoSaude: number) {
        if (gastoSaude < 1) {
            throw new Error('Gastos com saúde informado é inválido')
        }
        this.gastoSaude = gastoSaude
    }
    
    public Imposto() {
        if (this.getRendaAnual() < 20000) {
            return `${(this.getRendaAnual()/100) * 15 - (this.gastoSaude/100) * 50}`
        } else if (this.getRendaAnual() > 20000) {
            return `${(this.getRendaAnual()/100) * 25 - (this.gastoSaude/100) * 50}`
        }
    }
}

const pessoaFisica = new PessoaFisica('Rafaella', 18000, 1000)
const pessoaFisica2 = new PessoaFisica('Louis', 70000, 1500)


//testes de validação Pessoa Física

try {
    pessoaFisica.setNome('')
    console.log(pessoaFisica)
} catch (error) {
    console.log(error.message)
}

try {
    pessoaFisica.setRendaAnual(0)
    console.log(pessoaFisica)
} catch (error) {
    console.log(error.message)
}

try {
    pessoaFisica.setGastoSaude(0)
    console.log(pessoaFisica)
} catch (error) {
    console.log(error.message)
}

console.log(`Imposto de renda de ${pessoaFisica.getNome()} é R$: `, pessoaFisica.Imposto())
console.log(`Imposto de renda de ${pessoaFisica2.getNome()} é R$: `, pessoaFisica2.Imposto())

class PessoaJuridica extends Central {
    private numFuncionarios: number;

    constructor(nome: string, rendaAnual: number, numFuncionarios: number) {
        super(nome, rendaAnual)
        this.numFuncionarios = numFuncionarios;
    }

    public getNumFuncionarios() {
        return this.numFuncionarios
    }

    public setNumFuncionarios(numFuncionarios: number) {
        if (numFuncionarios < 1) {
            throw new Error('Número de funcionários inválido')
        }
        this.numFuncionarios = numFuncionarios
    }
    
    public Imposto() {
        if (this.numFuncionarios > 10) {
            return `${(this.getRendaAnual()/100) * 14}`
        } else {
            return `${(this.getRendaAnual()/100) * 16}`
        }
    }
}

const pessoaJuridica = new PessoaJuridica('SpaceX', 100000, 800)
const pessoaJuridica2 = new PessoaJuridica('Loja do Zé', 40000, 10)

//testes de validação Pessoa Jurídica

try {
    pessoaJuridica.setNumFuncionarios(0)
    console.log(pessoaJuridica)
} catch (error) {
    console.log(error.message)
}

console.log(`Imposto de renda da empresa ${pessoaJuridica.getNome()} é R$: `, pessoaJuridica.Imposto())
console.log(`Imposto de renda da empresa ${pessoaJuridica2.getNome()} é R$: `, pessoaJuridica2.Imposto())