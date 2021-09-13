# Trabalho de Programação Orientada a Objeto 2

1) Crie uma classe Pessoa com os atributos nome, sexo e idade. Crie os getters e
setters. No setters valide se o nome for em branco retorne uma mensagem de nome
inválido. Se o sexo for diferente de Masculino ou Feminino retorne uma mensagem
inválida. Se a idade for 0 retorne uma mensagem de idade inválida. Crie um método
para receber a idade, se a idade for maior ou igual a 18 exibir a mensagem pessoa
maior de idade, caso contrário exibir a mensagem pessoa menor de idade.
2) Crie uma classe Veiculos com os atributos modelo, marca, ano, valorLocacao e
quantidade de dias. Crie os getters e setters. No setters crie validações para não
aceitar modelo, marca, ano, valorLocacao e quantidade em branco ou com valor
zero. Crie um método passeio para receber a quantidade de dias e o valor da
locação. O sistema calcule o total que será a multiplicação da quantidade de dias
pelo valor da locação.
3) Crie uma classe Fatura com os atributos números, descrição, quantidade
Comprada e preço. Crie um método valor da Fatura para multiplicar a quantidade
comprada pelo preço.
4) Crie uma classe para calcular o imposto de renda. Crie uma classe Pai com os
atributos nome e renda anual. Crie os getters e setters com as suas validações. Crie
uma classe filha Pessoa Física para herdar da classe Pai e com o atributo gastos
com saúde, crie os getter e setter com a validação. Crie uma classe filha Pessoa
Jurídica para herdar da classe Pai e com o atributo número de funcionários. Crie o
getter e o setter com a validação.
Regras para os cálculos
Pessoa Física: Pessoas cuja renda foi abaixo de 20.000,00 pagam 15% de imposto.
Pessoas com renda maior ou igual a 20.000,00 pagam imposto de 25%. Se a
pessoa teve gastos com saúde, 50% destes gastos são abatidos no imposto.
Exemplo: Se uma pessoa cuja renda foi de 50.000,00 e teve 2.000,00 em gastos
com saúde, o imposto fica: (50.000,00 * 25%) - (2000 * 50%) = 11.500,00
Pessoa Jurídica: Pessoas jurídicas pagam 16% de imposto, porém, se a empresa
possuir mais de 10 funcionários, ela paga 14% de imposto. Exemplo: Uma empresa
Trabalho de POO II 2
cuja renda foi de 400.000,00 e possui 25 funcionários, o imposto fica: 400.000,00 *
14% = 56.000,00
5) Crie uma classe chamada Vendedores com os atributos nome, salario e valor da
venda. Crie os getters e setters e as validações. Crie um método desconto para
calcular 8% do salário.
Crie uma classe filha chamada Vendedor de Pessoa Física com o atributo região,
crie o getter e setter com validação para aceitar somente as regiões sul, sudeste,
centro-oeste, norte e nordeste. Crie um método para calcular a comissão. Se a
região for sul a comissão será de 10% sobre o valor da venda. Se a região for
sudeste a comissão será de 12% sobre o valor da venda, se a região for centrooeste a comissão será de 14% sobre o valor da venda, se a região for norte a
comissão será de 15% sobre o valor da venda, Se a região for nordeste a comissão
será de 17% sobre o valor da venda. Crie o método para calcular o salário total que
será o salario mais a comissão.
Crie uma classe filha chamada Pessoa Jurídica com os atributos nome da empresa,
total de funcionários, crie os getters, setters e as suas validações. Crie um método
para calcular a comissão. Se o valor da venda for menor que 5.000,00 o valor da
comissão será de 2% sobre o valor da venda. Se o valor da venda for maior ou igual
a 5.000,00 e menor que 10.000,00 o valor da comissão será de 4% sobre o valor da
venda. Se o valor da venda for maior ou igual a 10.000,00 o valor da comissão será
de 6% sobre o valor da venda. Crie um método salario Total que será a soma do
salario mais comissão e mais R$ 200,00 se o número de funcionários for menor que
100 ou mais R$ 300,00 se o número de funcionários for maior ou igual a 100.
6) Crie uma interface chamado IEndereço com os seguintes atributos rua, numero,
bairro e cidade. Crie um variável do endereço que seja do tipo da interface
endereço. Atribua um endereço uma rua, numero, bairro e cidade para a variável
endereço que é do mesmo tipo da interface. Utilize o console.log para exibir o
conteúdo da variável endereço
