//Parte 1
//Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeiro ou falso:

//a) 5 é maior que 20 e também é menor que 2;

//b) 5 é igual a 5 ou é igual a “5”;

//c) negação de (vinte é maior que cinquenta)

//d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
//-------------------------------------------------------------------------------------------------------------------------------

//a) 5 é maior que 20 e também é menor que 2;
console.log(`5 é maior que 20 e também é menor que 2: ${5>20 && 5<2}`)

//b) 5 é igual a 5 ou é igual a “5”;
console.log(`5 é igual a 5 ou é igual a “5”: ${5===5 || 5 ==="5"}`)

//c) negação de (vinte é maior que cinquenta)
console.log(`negação de (vinte é maior que cinquenta): ${!(20>50)}`)

//d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
console.log(`negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta): ${!(20>50 || 50>60)}`)

//Parte 2

/*
O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.

Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):

a) Auxílio creche por filho:  R$45,50

b) Comissão de 10% sobre o total de vendas mensal

c) Total de vendas dos meses de janeiro a junho:

- Janeiro: R$ 5.784,50
- Fevereiro: R$ 3.418,41
- Março: R$ 4.124,10
- Abril: R$ 1.874,00
- Maio: R$ 7.000,00
- Junho: R$ 9.450,00
d)  Desconto do INSS 5% do salário

Calcule:

- O salário fixo mais o auxílio creche

- Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

- Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)

- Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

- A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)
*/

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Parte do exercicio anterior de RH feito.

//Sistema de RH

const nome = prompt("Digite o seu nome completo:")

const dataNascimento = prompt("Digite a data do seu nascimento no formado dd/mm/aaaa:")

const endereco = prompt("Digite o seu endereço:")

const cpf = Number(prompt("Digite o seu CPF:"))

const escolaridade = prompt("Digite o seu grau de escolaridade:")

const cnh = "Você possui CNH?"
const cnhCheck = confirm(cnh)

const filhos = Number(prompt("Quantos filhos você tem?Caso nenhum, coloque 0"))

const cargoAtual = prompt("Qual o seu cargo atual?")

const salario = Number(prompt("Qual o seu salario?"))

const comissao = Number(prompt("Você recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero"))


const anoAdmissao = prompt("Informe o seu ano de admissão:")

//Respostas do exercício
//- O salário fixo mais o auxílio creche
const auxilioCreche = 45.50*filhos


console.log(`Valor do salario + auxilio creche: ${salario + auxilioCreche}`)

//- Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
const comissaoJaneiro = 5784.50

console.log(`O valor que receberá de comissão em janeiro é: ${comissaoJaneiro*0.1}`)

//- Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)
const inss = 0.05

console.log(`O valor descontando em janeiro pelo INSS é: ${(salario + (comissaoJaneiro*0.1))*0.05}`)

//- Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

const comissaoFevereiro = 3418.41
const comissaoMarco = 4124.10
const comissaoAbril = 1874
const comissaoMaio = 7000
const comissaoJunho = 9450

const mediaJaneiro = (salario+auxilioCreche+(comissaoJaneiro*0.1))-(salario+auxilioCreche+(comissaoJaneiro*0.1))*0.05
const mediaFevereiro = (salario+auxilioCreche+(comissaoFevereiro*0.1))-(salario+auxilioCreche+(comissaoFevereiro*0.1))*0.05
const mediaMarco = (salario+auxilioCreche+(comissaoMarco*0.1))-(salario+auxilioCreche+(comissaoMarco*0.1))*0.05
const mediaAbril = (salario+auxilioCreche+(comissaoAbril*0.1))-(salario+auxilioCreche+(comissaoAbril*0.1))*0.05
const mediaMaio = (salario+auxilioCreche+(comissaoMaio*0.1))-(salario+auxilioCreche+(comissaoMaio*0.1))*0.05
const mediaJunho = (salario+auxilioCreche+(comissaoJunho*0.1))-(salario+auxilioCreche+(comissaoJunho*0.1))*0.05

console.log(`Media do salario de janeiro: ${mediaJaneiro}`)

console.log(`Media do salario fevereiro: ${mediaFevereiro}`)

console.log(`Media do salario março: ${mediaMarco}`)

console.log(`Media do salario abril: ${mediaMaio}`)

console.log(`Media do salario maio: ${mediaMaio}`)

console.log(`Media do salario junho: ${mediaJunho}`)

//- A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)

console.log(`A media dos últimos 6 meses é: ${(mediaJaneiro + mediaFevereiro + mediaMarco + mediaAbril + mediaMaio + mediaJunho)/6}`)



