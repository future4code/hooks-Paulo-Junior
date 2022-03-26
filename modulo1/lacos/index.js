// -----------------------EXERCICIO  DE INTERPRETAÇÃO 1---------
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// O console irá imprimir 10, 
// pois valor recebe e soma o valor da variável até 5... 1 + 2 + 3 + 4 = 10
// ele faz isso pq reconhece a let valor como Number, se fosse uma string ele apenas concatenaria.

// -----------------------EXERCICIO  DE INTERPRETAÇÃO 2---------
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) O que vai ser impresso no console?
//R: será impresso os números maiores que 18 do array lista

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
//R: sim o for...of... serve exatamente para percorrer os valores de um objeto iterável.
//e usaria o seguinte código:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//  console.log(numero)
// }

// ----------------------- EXERCICIO  DE INTERPRETAÇÃO 3 ---------
//Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
//R: o resultado seria 4 asteriscos

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }


// ----------------------- EXERCICIO  DE ESCRITA DE CÓDIGO 1 ---------
// const quantidadeDeBichinhos = Number(prompt('Quantos animais de estimação você tem?'))
// const nomeDosBichinhos = []

// if (quantidadeDeBichinhos === 0) {
//     console.log('Que pena! você pode adotar um pet!')
// }
// else {
//     for (let i = 0; i < quantidadeDeBichinhos; i++) {
//         let nome = prompt('Digite o nome do seu bichinho, um de cada vez')
//         nomeDosBichinhos.push(nome)
//     }
//     console.log(nomeDosBichinhos)
// }

// ----------------------- EXERCICIO  DE ESCRITA DE CÓDIGO 2 ---------
// a) Escreva um programa que imprime cada um dos valores do array original.
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// function imprimir (){
//     for (item of arrayOriginal) {
//         console.log(item)
        
//     }
        
// }
// imprimir()

//b) Escreva um programa que imprime cada um dos valores do array original divididos por 10
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// function soma (array){
  
//   for (let i = 0; i < arrayOriginal.length; i++) {
//     let element = array[i];
//     element = element / 10
//     console.log(element)
//   }
// }


// c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (item of arrayOriginal) {
//             if (item % 2 === 0) {
//                 console.log(item)
//             }
            
//         }

// d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//   for(let i = 0; i<arrayOriginal.length; i++){
//     let numero = arrayOriginal[i]
//     console.log(`o elemento do índex ${i} é: ${numero}`)
//   }


// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maiorNum =  arrayOriginal[0]
// let menorNum = arrayOriginal[0]
// for (let num of arrayOriginal) {
//     if(num > maiorNum){
//       maiorNum = num
//     } else if(num < menorNum) {
//       menorNum = num
//     }
    
//     }
//     console.log(`O maior número é: ${maiorNum}, e o menor número é ${menorNum}`)

//-------------   DESAFIO DE CÓDIGO ---------------
const numInicial = prompt('Digite um número', 'De preferência menor que 100')