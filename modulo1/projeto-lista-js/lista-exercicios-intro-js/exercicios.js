// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt('Digite a área!'))
  const largura = Number(prompt('Digite a largura!'))

  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano atual'))
  const anoNascimento = Number(prompt('Digite o ano de nascimento'))

  console.log(anoAtual-anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso/(altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome = prompt('Digite seu nome')
  const idade = prompt('Digite sua idade')
  const email = prompt('Digite seu email')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt('Digite uma cor favorita')
  const corFavorita2 = prompt('Digite uma cor favorita')
  const corFavorita3 = prompt('Digite uma cor favorita')

  let cores = [corFavorita1, corFavorita2, corFavorita3]
  console.log(cores)
}
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const palavra = string
  
 return palavra.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const total = (custo/valorIngresso)
  return total
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length == string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const tamanho = array[array.length -1]
  return tamanho
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiroElemento = array.shift()
    let ultimoElemento = array.pop()
    let colocandoUltimoElemento = array.push(primeiroElemento)
    let colocandoPrimeiroElemento = array.unshift(ultimoElemento)
  
      return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() ===string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano atual'))
  const anoNascimento = Number(prompt('Digite seu ano de nascimento'))
  const anoRg = Number(prompt('Digite o ano de emissão de sua RG'))
  
  const idade = anoAtual - anoNascimento
  const anoRenovacao = anoAtual - anoRg

  const opcao1 = idade <=20 && anoRenovacao % 5 ===0;
  const opcao2 = (idade >20 && idade <=50) && anoRenovacao >= 10
  const opcao3 = idade >50 && anoRenovacao >=15
  

  console.log(opcao1 || opcao2 || opcao3)

} 

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const caso1 = ano % 400 ===0
  const caso2 = (ano % 4 === 0 ) && (ano % 100 !==0)
  
  return caso1 || caso2
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

const ask1 = prompt('Você tem mais de 18 anos?') === 'sim'
const ask2 = prompt('Você possui ensino médio completo?') ==='sim'
const ask3 = prompt(' Você possui disponibilidade exclusiva durante os horários do curso?') ==='sim'

console.log(ask1 && ask2 && ask3)

}