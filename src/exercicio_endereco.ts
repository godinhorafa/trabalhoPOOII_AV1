interface IEndereco {
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
}

const novoEndereco: IEndereco = {
    rua: "General Andrade Neves",
    numero: 232,
    bairro:'São Geraldo',
    cidade:'Volta Redonda',
};

console.log(novoEndereco)