// Construa um programa que:

//a) Peça ao usuário que insira um número par

//b) Imprima no console o resto da divisão desse número por 2.

//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

//d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código.

//----------------------------------------------------------------------------------------------------------------

//a) Peça ao usuário que insira um número par
const numero = Number(prompt("Digite um numero par:"))

console.log(typeof numero)//verificando o tipo da variavel

//b) Imprima no console o resto da divisão desse número por 2
console.log(`O resto da divisão é: ${numero%2}`)

//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//Todos os resultados das diviões deu 0 por estar dividindo um número par por 2

//d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código.
//Caso ele digite um número ímpar, o resultado da divisão dá 1

