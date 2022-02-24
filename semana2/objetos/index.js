//--------------Exercício de interpretação de código1-----------

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])// Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1]) // virginia cavendish
// console.log(filme.transmissoesHoje[2])// canal: "Globo", horario: "14h"

//--------------Exercício de interpretação de código 2-----------
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro) // { nome: 'Juca', idade: 3, raca: 'SRD' }
// console.log(gato)// { nome: 'Juba', idade: 3, raca: 'SRD' }
// console.log(tartaruga) // { nome: 'Jubo', idade: 3, raca: 'SRD' }

// b) os 3 pontos permitem acessar o conteúdo de um objeto iterável.

//--------------Exercício de interpretação de código 3 -----------

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender")) // retorna false
// console.log(minhaFuncao(pessoa, "altura")) // retorna undefined

// b) retorna "false" ,pois retorna o valor de backender e retorna "undefined" porque ele não encontrou nenhum propriedade altura

//--------------Exercício de Escrita de código 1 -----------
 // a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

//  const pessoa ={
// 	 nome: 'Paulo',
// 	 apelidos: ['nuno','pj','paulinho']
//  }
//  function imprime (objeto){
// 	 const pessoa = objeto
// 	 console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
//  }
//  imprime(pessoa)

// b) b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

//  const pessoa ={
// 	 nome: 'Paulo',
// 	 apelidos: ['nuno','pj','paulinho']
//  }

//  const pessoa2 = {
// 	 ...pessoa,
// 	 apelidos: ['batman','naruto','goku']
//  }

//   function imprime (objeto){
// 	 const pessoa2 = objeto
// 	 console.log(`Eu sou ${pessoa2.nome}, mas pode me chamar de: ${pessoa2.apelidos[0]}, ${pessoa2.apelidos[1]} ou ${pessoa2.apelidos[2]}`)
//  }
//  imprime(pessoa2)
 
//--------------Exercício de Escrita de código 2 -----------

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

// const pessoa1 = {
// 	nome: 'naruto',
// 	idade: 29,
// 	profissao: 'hokage'
// }
// const pessoa2 = {
// 	nome: 'goku',
// 	idade: 100,
// 	profissao: 'herói'
// }
// function imprime (pessoa1,pessoa2){
// 	let arr1 = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length]
// 	let arr2 = [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length]
	
// 	return console.log(arr1) + console.log(arr2)
// }
// imprime(pessoa1,pessoa2)

//--------------Exercício de Escrita de código 3  -----------
// const carrinho = []
// const fruta1 = {
// 	nome: 'abacaxi',
// 	disponibilidade: true
// }
// const fruta2 = {
// 	nome: 'manga',
// 	disponibilidade: true
// }
// const fruta3 = {
// 	nome: 'abacate',
// 	disponibilidade: true
// }
// function feira (fruta1, fruta2, fruta3){

// 	carrinho[0] = fruta1
// 	carrinho[1] = fruta2
// 	carrinho[2] = fruta3
// 	 console.log(carrinho)
// }
// feira(fruta1,fruta2,fruta3)


//--------------Desafio de código 1  -----------
// const nome = prompt('qual o seu nome?')
// const idade = prompt('qual a sua idade?')
// const profissao = prompt('qual a sua profissao?')

// const objeto={}
// objeto.nome = nome
// objeto.idade = idade
// objeto.profissao = profissao
// console.log(objeto)
// console.log(typeof objeto)

//--------------Desafio de código 2  -----------
// const filme1 = {
// 	'ano de lançamento' : 2012,
// 	nome : 'O Hobbit: Uma Jornada Inesperada '
// }
// const filme2 = {
// 	'ano de lançamento' : 2014,
// 	nome: 'O Hobbit: A Batalha dos Cinco Exércitos'
// }
// function comparar (p1,p2){
// 	const tempo = p1['ano de lançamento'] < p2['ano de lançamento']
// 	const tempo2 = p1['ano de lançamento'] === p2['ano de lançamento']
// 	return console.log(`O primeiro filme foi lançado antes do segundo? ${tempo}
// 	O primeiro filme foi lançado no mesmo ano do segundo? ${tempo2}`)
// }
// comparar(filme1,filme2)

//--------------Desafio de código 3  -----------
// const carrinho = []
// const fruta1 = {
// 	nome: 'abacaxi',
// 	disponibilidade: true
// }
// const fruta2 = {
// 	nome: 'manga',
// 	disponibilidade: true
// }
// const fruta3 = {
// 	nome: 'abacate',
// 	disponibilidade: true
// }
// function feira (fruta1, fruta2, fruta3){

// 	carrinho[0] = fruta1
// 	carrinho[1] = fruta2
// 	carrinho[2] = fruta3
// 	 console.log(carrinho)
// }
// function dispInvertida (fruta){
// 	const inverso = fruta.disponibilidade != fruta.disponibilidade
// 	console.log(inverso)
// }
// feira(fruta1,fruta2,fruta3)
// dispInvertida(fruta3)