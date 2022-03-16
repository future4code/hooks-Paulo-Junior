//----------------Exercicio de Interpretação de Codigo 1 -----------
// R) Será impresso 3 vezes o array usuarios

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//----------------Exercicio de Interpretaação de Codigo 2 -----------
// R) Será impresso todos os valores da propriedade Nome

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

//----------------Exercicio de Interpretação de Codigo 3 -----------
// R) Irá imprimir todo objeto em que o valor da ppropriedade apleido seja diferente de CHIJO

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

//----------------Exercicio de Escrita de Codigo 1 -----------

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

 // a) Crie um novo array que contenha apenas o nome dos doguinhos

//  const doguinhos = pets.map(obj =>{
//      newArray = obj.nome
//      return newArray
//  })

//  console.log(doguinhos)

// b) Crie um novo array apenas com os cachorros salsicha

//  const doguinhos = pets.filter(obj => obj.raca.toLowerCase() === 'salsicha')

//  console.log(doguinhos)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

// const somentePoodle = pets.filter(obj =>{
//     newArray = obj.raca === 'Poodle'
//     return newArray
// })

// const mensagem = somentePoodle.filter(obj => 
//     console.log(`"Você ganhou um cupom de desconto de 10% para tosar o/a ${obj.nome}!"`) 
//     )

//----------------Exercicio de Escrita de Codigo 2 -----------
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a) Crie um novo array que contenha apenas o nome de cada item
//  const apenasNome = produtos.map(obj => obj.nome)

//  console.log(apenasNome)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// let desconto = produtos.map((obj) =>{ 
//     return {nome: obj.nome, preco: obj.preco * 0.95}
//  } )
// console.log(desconto)

//C) Crie um novo array que contenha apenas os objetos da categoria Bebidas
// const soBebidas = produtos.filter(obj => obj.categoria.includes ('Bebidas') )
// console.log(soBebidas)

// d)Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

//const nomeYpe = produtos.filter(obj => obj.nome.includes ('Ypê') )
//console.log(nomeYpe)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
// const nomeYpe = produtos.filter(obj => obj.nome.includes ('Ypê') )

// const fraseYpe = nomeYpe.map(obj =>{ return `Compre ${obj.nome} por ${obj.preco}`
// })
// console.log(fraseYpe)