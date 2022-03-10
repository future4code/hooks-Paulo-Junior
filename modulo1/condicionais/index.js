//-------------EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO 1 -----
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// r: ele verifica se o número é par e imprime " passou no teste", senão imprime "não passou no teste"

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// r: números pares

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// r: números ímpares

//-------------EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO 2 -----
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//      break // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// r: verifica o nome da fruta digitada, e imprime seu valor.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// r: 2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//r: ele vai imprimir o último preco antes do break, que nesse caso é 5

//------------- EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO 3 -----
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// r: pede para o usuário digitar um número

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// r: 10 mostra a mensagem "ESSE NÚMERO PASSOU NO TESTE", e se for -10 não vai mostrar nada

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// r: o erro que aparece é pelo fato de a variável mensagem ser de escopo local e o último console.log chamar ela, sendo que ela deveria ser de escopo global

//------------- EXERCÍCIO DE ESCRITA DE CÓDIGO 1 -----
// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

//     const usuario = Number(prompt('qual a sua idade?'))

//    if (usuario >= 18) {
//        console.log('você pode dirigir')
//    } else {
//        console.log('você não pode dirigir')
//    }'

//------------- EXERCÍCIO DE ESCRITA DE CÓDIGO 2 -----
// Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// const turno = prompt('qual turno você estuda? Digite M para matutino V para vespertino e N para noturno')

// if(turno === 'M'){
//     console.log('Bom dia!')
// } else if(turno ===' V') {
//     console.log('Boa tarde!')
// } else {
//     console.log('Boa noite!')
// }

//------------- EXERCÍCIO DE ESCRITA DE CÓDIGO 3 -----
// Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// const turno = prompt('qual turno você estuda? Digite M para matutino V para vespertino e N para noturno')

// switch (turno) {
//     case 'M':
//         console.log('Bom Dia!')
//         break;
//     case 'V':
//     console.log('Boa tarde!')
//     default:
//         console.log('Boa noite!')
//         break;
// }

//------------- EXERCÍCIO DE ESCRITA DE CÓDIGO 4 -----
// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// const filme = prompt('Digite o gênero do filme')
// const valor = Number(prompt('Qual o valor do filme?'))

// function cinema (par1,par2){
// const genero = (par1 === 'fantasia')
// const ingresso = (par2 < 15)
// if (genero && ingresso) {
//     console.log('Bom filme!')
// }else{
//     console.log('Escolha outro filme!')
// }
// }
// cinema(filme,valor)

//------------- DESAFIO DE CÓDIGO 1 -----
// const filme = prompt('Digite o gênero do filme')
// const valor = Number(prompt('Qual o valor do filme?'))
// const lanche = prompt('qual lanchinho você irá comprar?')

// function cinema (par1,par2){
// const genero = (par1 === 'fantasia')
// const ingresso = (par2 < 15)
// if (genero && ingresso) {
//     console.log('Bom filme! e aproveite o seu', lanche)
// }else{
//     console.log('Escolha outro filme!')
// }
// }
// cinema(filme,valor)

//------------- DESAFIO DE CÓDIGO 2 -----

const nome = prompt('Qual é o seu nome?')
let tipo = prompt('digite qual será o tipo de jogo, IN ou DO?')
tipo = tipo.toUpperCase()
let etapa = prompt('Qual será a etapa do jogo SF, DT ou FI ?')
etapa = etapa.toUpperCase()
const categoria = Number(prompt('qual a categoria, 1,2,3 ou 4?'))
const quantidadeDeIngreso = Number(prompt('quantos ingressos você deseja comprar?','apenas números'))


function imprime (tipo, etapa){
    console.log('-----Dados de compra-----')
    console.log(`Nome do cliente: ${nome}`)
    if(tipo === 'IN'){
        console.log('Tipo de jogo: Internacional')
     } else {
         console.log('Tipo de jogo: Nacional')
     }
     if(etapa === 'SF'){
        console.log('Etapa do jogo: Semi-final')
    } else if ( etapa === 'DT'){
        console.log('Etapa do jogo: Decisão de terceiro lugar')
    } else {
        console.log('Etapa do jogo: Final')
    }
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngreso}`)
}
imprime(tipo,etapa)

let precoUnitario;

switch (etapa) {
  case "SF":
    switch (categoria) {
      case 1:
        precoUnitario = 1320;
        break;
      case 2:
        precoUnitario = 880;
        break;
      case 3:
        precoUnitario = 550;
        break;
      case 4:
        precoUnitario = 220;
        break;
      default:
        precoUnitario = 0;
        break;
    }
    break;
  case "DT":
    switch (categoria) {
      case 1:
        precoUnitario = 660;
        break;
      case 2:
        precoUnitario = 440;
        break;
      case 3:
        precoUnitario = 330;
        break;
      case 4:
        precoUnitario = 170;
        break;
      default:
        precoUnitario = 0;
        break;
    }
    break;
  case "FI":
    switch (categoria) {
      case 1:
        precoUnitario = 1980;
        break;
      case 2:
        precoUnitario = 1320;
        break;
      case 3:
        precoUnitario = 880;
        break;
      case 4:
        precoUnitario = 330;
        break;
      default:
        precoUnitario = 0;
        break;
    }
    break;
  default:
    break;
}
switch (tipo) {
    case 'IN':
        precoUnitario = precoUnitario * 4.10
        break;

    default:
        break;
}
console.log('-----Valores------')
console.log("Valor do Ingresso:", precoUnitario.toFixed(2));
console.log("Valor Total da Compra:", (precoUnitario * quantidadeDeIngreso).toFixed(2));

