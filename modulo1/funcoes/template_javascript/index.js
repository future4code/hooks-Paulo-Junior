//                  EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO 1
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// minhaFuncao(2) // NÃO IRÁ APARECER NADA, POIS A FUNÇÃO NÃO FOI IMPRESSA
// minhaFuncao(10) // NÃO IRÁ APARECER NADA, POIS A FUNÇÃO NÃO FOI IMPRESSA
 //console.log(minhaFuncao(2)) // SERÁ IMPRESSO 10
 //console.log(minhaFuncao(10)) // SERÁ IMPRESSO 50

 //                  EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO 2
 //2.1
//  let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)
// Essa função receberá um texto, depois irá converter as palavras em minúscula e depois irá procurar a palavra 'cenoura', se encontrar retorna true, senão false.


//                  EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO 2
 //2.2 usando as 3 entradas abaixo, na função acima, a resposta será:
//  i.   Eu gosto de cenoura --- true
//  ii.  CENOURA é bom pra vista ---true
//  iii. Cenouras crescem na terra ---true


//                  EXERCICIO DE ESCRITA DE CÓDIGO 1
//1.A
// function frase(){
//     console.log('Olá eu sou o Paulo, tenho 29 anos e moro em Alagoas')
// }
// frase()

//1.B 

// const nome = 'Paulo'
// const idade = 29
// const cidade = 'Jaramataia'
// const profissao = 'Desenvolvedor web'

// function frase (nome,idade,cidade,profissao){
//     return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
// }
// console.log(frase(nome,idade,cidade, profissao))

//                  EXERCICIO DE ESCRITA DE CÓDIGO 2
//2.a
// function soma(num1,num2){
//     return num1 + num2
// }
// console.log(soma(5,9))

//2.b
// function comparador (num1,num2){
//     return num1 >= num2
// }
// console.log(comparador(9,3))

//2.c
// function par (num1){
//     return (num1 % 2) === 0
// }
// console.log(par(9))

//2.d 

// function mensagem (msg1){
//     let msg1EmMaiuscula = msg1.toUpperCase()
//     console.log(msg1.length, msg1EmMaiuscula)
// }
// mensagem('alerta')

//                  EXERCICIO DE ESCRITA DE CÓDIGO 3
// function soma (num1,num2){
//     return num1 +num2
// }

// function subtracao (num1,num2){
//     return num1 - num2
// }

// function multiplicacao (num1,num2){
//     return num1 * num2
// }

// function divisao (num1,num2){
//     return num1/num2
// }

// const numeros1 = Number(prompt('Digite um número'))
// const numeros2 = Number(prompt('Digite um número'))

// console.log(`
// Os números inseridos foram: ${numeros1} e ${numeros2}
//  soma: ${soma(numeros1,numeros2)}
//  diferença : ${subtracao(numeros1,numeros2)}
//  multiplicação: ${multiplicacao(numeros1,numeros2)}
//  divisão: ${divisao(numeros1,numeros2)}
// `)

//                  DESAFIO DE CÓDIGO 1

let imprime = soma => console.log(soma)

const numeros = (num1,num2) => num1 + num2

imprime(numeros(3,4))

//                  DESAFIO DE CÓDIGO 2
// function hipotenusa(cat1,cat2){
//     var somaCat = (cat1**2) + (cat2**2)
//     var hip = Math.sqrt(somaCat)
//     return hip
// }

// console.log(hipotenusa(54,42))