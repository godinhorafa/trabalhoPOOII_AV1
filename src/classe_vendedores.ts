
class Vendedores {
    private nome: string;
    private salario: number;
    private valorVenda: number;

    constructor(nome: string, salario: number, valorVenda: number) {
        this.nome = nome;
        this.salario = salario;
        this.valorVenda = valorVenda;
    }

    public getNome() {
        return this.nome
    }

    public getSalario() {
        return this.salario
    }

    public getValorVenda() {
        return this.valorVenda
    }

    public setNome(nome: string) {
        if (nome.length < 1) {
            throw new Error('Nome inválido')
        } 
        this.nome = nome
    }

    public setSalario(salario: number) {
        if (salario < 1) {
            throw new Error('Salário declarado é inválido')
        }
        this.salario = salario
    }

    public setValorVenda(valorVenda: number) {
        if (valorVenda < 1) {
            throw new Error('Valor da venda inválido')
        }
        this.valorVenda = valorVenda
    }

    public Desconto() {
        return (this.salario/100) * 8
    }
}

class VendedorPessoaFisica extends Vendedores {
    static REGIOES = ['SUL', 'SUDESTE', 'CENTRO-OESTE', 'NORTE', 'NORDESTE']

    private regiao: string;

    constructor(nome: string, salario: number, valorVenda: number, regiao: string) {
        super(nome, salario, valorVenda)
        this.regiao = regiao;
    }

    public getRegiao() {
        return this.regiao
    }

    public setRegiao(regiao:string){
        if(!VendedorPessoaFisica.REGIOES.includes(regiao.toUpperCase())){
            throw new Error("Região inválida")
        } 
        this.regiao = regiao
    }

    public Comissao() {
        if (this.regiao == 'SUL') {
            return (this.getValorVenda()/100) * 10
        } else if (this.regiao == 'SUDESTE') {
            return (this.getValorVenda()/100) * 12
        } else if (this.regiao == 'CENTRO-OESTE') {
            return (this.getValorVenda()/100) * 14
        } else if (this.regiao == 'NORTE') {
            return (this.getValorVenda()/100) * 15
        } else {
            return (this.getValorVenda()/100) * 17
        }
    }

    public SalarioAjustado() {
        return this.getSalario() + this.Comissao()
    }
}

const vendedorPessoaFisica = new VendedorPessoaFisica('Rafaella', 5000, 4000, 'sudeste')
console.log(vendedorPessoaFisica.Comissao())
console.log(vendedorPessoaFisica.SalarioAjustado())

//testes de validação Pessoa Física

try {
    vendedorPessoaFisica.setNome('')
} catch (error) {
    console.log(error.message)
}

try {
    vendedorPessoaFisica.setSalario(0)
} catch (error) {
    console.log(error.message)
}

try {
    vendedorPessoaFisica.setValorVenda(0)
} catch (error) {
    console.log(error.message)
}

try {
    vendedorPessoaFisica.setRegiao('Centro-sul')
} catch (error) {
    console.log(error.message)
}


class VendedorPessoaJuridica extends Vendedores {
    private nomeEmpresa: string;
    private totalFuncionarios: number;

    constructor(nome: string, salario: number, valorVenda: number, nomeEmpresa: string, totalFuncionarios: number) {
        super(nome, salario, valorVenda)
        this.nomeEmpresa = nomeEmpresa;
        this.totalFuncionarios = totalFuncionarios;
    }

    public getNomeEmpresa() {
        return this.nomeEmpresa
    }

    public getTotalFuncionarios() {
        return this.totalFuncionarios
    }

    public setNomeEmpresa(nomeEmpresa: string) {
        if (nomeEmpresa.length < 1) {
            throw new Error('Nome inválido')
        }
        this.nomeEmpresa = nomeEmpresa
    }

    public setTotalFuncionarios(totalFuncionarios: number) {
        if (totalFuncionarios < 1) {
            throw new Error('Número de funcionários inválido')
        }
        this.totalFuncionarios = totalFuncionarios
    }

    public Comissao() {
        if (this.getValorVenda() < 5000) {
            return (this.getValorVenda()/100) * 2
        } else if (this.getValorVenda() >= 5000 && this.getValorVenda() < 10000) {
            return (this.getValorVenda()/100) * 4
        } else {
            return (this.getValorVenda()/100) * 6
        }
    }

    public SalarioTotal() {
        if (this.totalFuncionarios < 100) {
            return this.getSalario() + this.Comissao() + 200
        } else {
            return this.getSalario() + this.Comissao() + 300
        }
    }
}

const vendedorPessoaJuridica = new VendedorPessoaJuridica('Elena', 8000, 2000, 'RG Soluções', 120)
console.log(vendedorPessoaJuridica.Comissao())
console.log(vendedorPessoaJuridica.SalarioTotal())

//testes de validação Pessoa Jurídica

try {
    vendedorPessoaJuridica.setTotalFuncionarios(0)
} catch (error) {
    console.log(error.message)
}

try {
    vendedorPessoaJuridica.setNomeEmpresa('')
} catch (error) {
    console.log(error.message)
}

