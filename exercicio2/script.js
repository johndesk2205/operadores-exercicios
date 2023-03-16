//Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

//O primeiro numero é maior que o segundo?
//O primeiro numero é igual ao segundo? 
//O primeiro numero é divisível pelo segundo? 
//O segundo numero é divisível pelo primeiro? 
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//Pedindo os dois números
const numero1 = Number(prompt("Digite o primeiro número:"))

const numero2 = Number(prompt("Digite o segundo número:"))

//Mostrando na tela os dois números
console.log(`Primeiro número: ${numero1}`)
console.log(`Segundo número: ${numero2}`)

//O primeiro numero é maior que o segundo?
console.log(`Primeiro número é maior que o segundo? ${numero1>numero2}`)

//O primeiro numero é igual ao segundo?
console.log(`Primeiro número é igual ao segundo? ${numero1===numero2}`)

//O primeiro numero é divisível pelo segundo?
console.log(`Primeiro número é divisível pelo segundo? ${(numero1%numero2)===0}`)

//O segundo numero é divisível pelo primeiro? 
console.log(`Segundo número é divisível pelo primeiro? ${(numero2%numero1)===0}`)

