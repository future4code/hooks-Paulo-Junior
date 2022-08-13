// Exercicío 1

// a)
// let minhaString: string = 12 se tentar executar fala que o tipo número não é disponível para o tipo string

// b)
// let meuNumero: number | string = "Olá mundo"
// console.log(meuNumero)

// c) e d)
// enum cores {
//     VERMELHO = "vermelho",
//     LARANJA = "laranja",
//     AMARELO = "amarelo",
//     VERDE = "verde",
//     AZUL = "azul",
//     ANIL = "anil",
//     VIOLETA = "violeta"
// }

// type person = {
//     nome: string,
//     idade: number,
//     corfavorita: cores
// }

// const pessoa1: person = {
//     nome: "Paulo",
//     idade:29,
//     corfavorita: cores.AMARELO
// }

// const pessoa2: person = {
//     nome: "Alan",
//     idade:39,
//     corfavorita: cores.ANIL
// }

// const pessoa3: person = {
//     nome: "Julio",
//     idade:34,
//     corfavorita: cores.VIOLETA
// }

// console.table(pessoa1)

// EXERCICIO2

// function obterEstatisticas (numeros: number[]) {

//     const numerosOrdenados = numeros.sort(
//         (a: number, b: number) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// type amostraDeDados = {
//     numeros: [21, 18, 65, 44, 15, 18] ,
//     obterEstatisticas: (numeros: number[]) => {}
// }


// console.log(obterEstatisticas([21, 18, 65, 44, 15, 18] ))
// EXERCICIO 3

type post = {
    autor: "string",
    texto: "string"
}