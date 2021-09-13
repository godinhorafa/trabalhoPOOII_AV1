
class Veiculos {

    private modelo: string;
    private marca: string;
    private ano: string;
    private valorLocacao: number;
    private quantidadeDiarias: number;

    constructor(modelo: string, marca: string, ano: string, valorLocacao: number, quantidadeDiarias: number) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
        this.valorLocacao = valorLocacao;
        this.quantidadeDiarias = quantidadeDiarias;
    }

    public getModelo() {
        return this.modelo
    }

    public getMarca() {
        return this.marca
    }

    public getAno() {
        return this.ano
    }

    public getValorLocacao() {
        return this.valorLocacao
    }

    public getQuantidadeDias() {
        return this.quantidadeDiarias
    }

    public setModelo(modelo: string) {
        if (modelo.length < 1) {
            throw new Error('Informe um modelo válido')
        }
        this.modelo = modelo
    }

    public setMarca(marca: string) {
        if (marca.length < 1) {
            throw new Error('Informe uma marca válida')
        }
        this.marca = marca
    }

    public setAno(ano: string) {
        if (ano.length < 4) {
            throw new Error('Informe um ano válido')
        }
        this.ano = ano
    }

    public setValorLocacao(valorLocacao: number) {
        if (valorLocacao < 1) {
            throw new Error('Informe um valor de locação válido')
        }
        this.valorLocacao = valorLocacao
    }

    public setQuantidadeDias(quantidadeDiarias: number) {
        if (quantidadeDiarias < 1) {
            throw new Error('Informe um número de diárias válido')
        }
        this.quantidadeDiarias = quantidadeDiarias
    }

    public Passeio() {
        return `Para a quantidade de ${this.quantidadeDiarias} dias, para o valor R$ ${this.valorLocacao} da diária, o passeio ficará ${this.quantidadeDiarias * this.valorLocacao} reais`
    }

}

const veiculos = new Veiculos('GLA 250', 'Mercedes', '2020', 400, 5)
console.log(veiculos)
console.log(veiculos.Passeio())

//testes de validação dados do Veículo

try {
    veiculos.setModelo('')
    console.log(veiculos.getModelo())
} catch (error) {
    console.log(error.message)
}

try {
    veiculos.setMarca('')
    console.log(veiculos.getMarca())
} catch (error) {
    console.log(error.message)
}

try {
    veiculos.setAno('')
    console.log(veiculos.getAno())
} catch (error) {
    console.log(error.message)
}

try {
    veiculos.setValorLocacao(0)
    console.log(veiculos.getValorLocacao())
} catch (error) {
    console.log(error.message)
}

try {
    veiculos.setQuantidadeDias(0)
    console.log(veiculos.getQuantidadeDias())
} catch (error) {
    console.log(error.message)
}

