//              EXERCÍCIO DE ESCRITA DE CÓDIGO 1
// let array
// console.log('a. ', array)// aqui será escrito undefinied

// array = null
// console.log('b. ', array) // aqui será escrito null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // aqui será escrito o tamano do array 11

// let i = 0
// console.log('d. ', array[i]) // aqui será escrito 3

// array[i+1] = 19
// console.log('e. ', array) // aqui será escrito 19 no lugar do indíce 1 da array

// const valor = array[i+6]
// console.log('f. ', valor) // aqui será escrito 9

//              EXERCICIO DE ESCRITA DE CODIGO 2
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// SERÁ ESCRITO SUBI NUM ÔNIBUS EM MIRROCOS 27


//          EXERCÍCIO DE ESCRITA DE CÓDIGO 1
// const nome = prompt('qual é o seu nome?')
// const email = prompt('qual é o seu email?')

// console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

//          EXERCÍCIO DE ESCRITA DE CÓDIGO 2

// const comidas = ['caldinho','churrasco','pizza','macarronada','pudim']

// console.log(`Essas são minhas comidas preferidas: ${comidas}`)
// console.log(`Essas são minhas comidas preferidas:
// ${comidas[0]}
// ${comidas[1]}
// ${comidas[2]}
// ${comidas[3]}
// ${comidas[4]}`)

//Exercício 2.c
// let comidas = ['caldinho','churrasco','pizza','macarronada','pudim']

// const comidaDoUser = prompt('Digite seu prato favorito!')

// let i = 1 

// comidas[i] = comidaDoUser

// console.log(comidas)

//          EXERCÍCIO DE ESCRITA DE CÓDIGO 3
// let listaDeTarefas = []

// let tarefas0 = prompt('Digite uma tarefa que você realizará hoje!')
// let tarefas1 = prompt('Digite mais uma tarefa que você realizará hoje!')
// let tarefas2 = prompt('Digite outra tarefa que você realizará hoje!')
// listaDeTarefas[0] = tarefas0
// listaDeTarefas[1] = tarefas1
// listaDeTarefas[2] = tarefas2

// // console.log(listaDeTarefas)

// let tarefaRealizada = Number(prompt('Digite qual tarefa já foi realizada, 0, 1 ou 2'))
// listaDeTarefas.splice(tarefaRealizada,1)

// console.log(listaDeTarefas)


//          DESAFIO DE CÓDIGO 1

// let frase = 'oi meu nome é paulo'
// let arrayDaFrase = frase.split(' ')

// console.log(arrayDaFrase)

//          DESAFIO DE CÓDIGO 2
let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

let pesquisaFrutas = frutas.indexOf('Abacaxi')

console.log(pesquisaFrutas, frutas.length)