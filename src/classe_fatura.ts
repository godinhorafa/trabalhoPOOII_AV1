
class Fatura {

    private numeros: string;
    private descricao: string;
    private quantidade: number;
    private preco: number;

    constructor(numeros: string, descricao: string, quantidade: number, preco: number) {
        this.numeros = numeros;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    public getNumeros() {
        return this.numeros
    }

    public getDescricao() {
        return this.descricao
    }

    public getQuantidade() {
        return this.quantidade
    }

    public getPreco() {
        return this.preco
    }

    public setNumeros(numeros: string) {
        if (numeros.length < 1) {
            throw new Error('Informe números válidos')
        }
        this.numeros = numeros
    }

    public setDescricao(descricao: string) {
        if (descricao.length < 1) {
            throw new Error('Descrição inválida')
        }
        this.descricao = descricao
    }

    public setQuantidade(quantidade: number) {
        if (quantidade < 1) {
            throw new Error('Quantidade inválida')
        }
        this.quantidade = quantidade
    }

    public setPreco(preco: number) {
        if (preco < 1) {
            throw new Error('Preço inválido')
        }
        this.preco = preco
    }

    public PrecoFinal() {
        return `O preço final da fatura de ${this.preco} reais é multiplicado pela quantidade ${this.quantidade}, resultando em: R$ ${this.preco * this.quantidade}`
    }
}

const fatura = new Fatura('20210910', 'compra cartão de crédito', 2, 300)
console.log(fatura)
console.log(fatura.PrecoFinal())

try {
    fatura.setNumeros('')
    console.log(fatura)
} catch (error) {
    console.log(error.message)
}

try {
    fatura.setDescricao('')
    console.log(fatura)
} catch (error) {
    console.log(error.message)
}

try {
    fatura.setQuantidade(0)
    console.log(fatura)
} catch (error) {
    console.log(error.message)
}

try {
    fatura.setPreco(0)
    console.log(fatura)
} catch (error) {
    console.log(error.message)
}



